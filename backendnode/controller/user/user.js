const mongoose = require("mongoose");
const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../utils/sendEmail');
require('dotenv').config();
let refreshTokens = [];
const authController = {
        signup: (req, res, next) => {
            User.find({ email: req.body.email }).exec().then(user => {
                if (user.length >= 1) {
                    return res.status(409).json({
                        message: 'Mail exists'
                    })
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        } else {
                            const user = new User({
                                email: req.body.email,
                                full_name: req.body.full_name,
                                permission: 1,
                                is_active: 1,
                                address: req.body.address,
                                gender: req.body.gender === 'FeMale' ? 0 : 1,
                                phone_number: req.body.phone_number,
                                city: req.body.city,
                                password: hash
                            });
                            user.save().then(result => {
                                    res.status(201).json({
                                        message: "User created",
                                        result: result
                                    })
                                })
                                .catch(err => {
                                    console.log(err)
                                    res.status(500).json({
                                        error: err
                                    })
                                });
                        }
                    })
                }

            })
        },
        generateAccessToken: (user) => {
            console.log("generateAccessToken", user);
            return jwt.sign({
                email: user.email,
                userId: user._id,
                role: user.role,
            }, process.env.ACCESS_KEY, {
                expiresIn: "1d"
            })
        },
        generateRefreshToken: (user) => {
            console.log("generateRefreshToken", user);
            return jwt.sign({
                email: user.email,
                userId: user._id,
                role: user.role,
            }, process.env.REFRESH_KEY, {
                expiresIn: "365d"
            })
        },
        login: (req, res, next) => {
            User.find({ email: req.body.email })
                .exec()
                .then(user => {
                    if (user.length < 1) {
                        return res.status(404).json({
                            message: 'cannot user '
                        })
                    }
                    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                        if (err) {
                            return res.status(401).json({
                                message: 'Auth failed'
                            })
                        }
                        if (result) {
                            const { generateAccessToken, generateRefreshToken } = authController
                            const token = generateAccessToken(user[0]);
                            const rfToken = generateRefreshToken(user[0]);
                            // console.log("user[0]._doc", user[0]._doc);
                            refreshTokens.push(rfToken);
                            res.cookie("refreshToken", rfToken, {
                                httpOnly: true,
                                secure: false,
                                path: "/",
                                sameSite: "strict"
                            });
                            const { password, ...other } = user[0]._doc;
                            return res.status(200).json({
                                message: 'Auth success',
                                ...other,
                                accessToken: token,
                            })
                        }
                        res.status(401).json({
                            message: 'Auth failed'
                        })
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        error: err
                    })
                });
        },
        deleteUser: async(req, res, next) => {
            const { id } = req.params;
            await User.remove({ _id: id }).exec().then(response => {
                res.status(200).json({
                    message: response,
                })
            }).catch(err => {
                res.status(500).json({ error: err })
                console.log(err);
            })
        },
        forgot: async(req, res, next) => {
                var content = '';
                User.findOne({ email: req.body.email }).exec().then(user => {
                    if (user) {
                        bcrypt.hash("12345679", 10, (err, hash) => {
                            user.password = hash;
                            user.save();
                        })
                    }
                }).catch(err => res.status(404).json({
                    error: err
                }));
                content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">${`password của user ${req.body.email} đã được reset là 12345679`}</h4>
            </div>
        </div>
    `;
        let options = {
            email: req.body.email,
            subject: 'Quên mật khẩu',
            message: content,
        }
        await sendEmail(options, req, res);
    },
    changePassword: (req, res, next) => {
        const { passwordOld, passwordNews } = req.body;
        User.findOne({ _id: req.userData.userId }).exec().then(user => {
            console.log("user",user);
            bcrypt.compare(req.body.passwordOld, user.password, (err, result) => {
                if(err){
                    return res.status(403).json({
                        error: "password no same database"
                    })
                }
                if (result) {
                    bcrypt.hash(passwordNews, 10, (err, hash) => {
                        user.password = hash;
                        user.save().then(result =>  res.status(200).json({
                            message: "password change success"
                        }))
                    })
                }
            })
        })
    },
    detailsUser: (req, res, next) => {
        const { idUser } = req.query;
        User.findById(idUser).then((response) => {
                return res.status(200).json({
                    data: response
                })
            })
            .catch(err => {
                return res.status(400).json({
                    error: err
                })
            })
    },
    requestRefeshToken: async(req, res) => {
        const refreshToken = await req.cookies.refreshToken;
        if (!refreshToken) res.status(401).json("You are not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, user) => {
            console.log("user", user);
            if (err) {

                console.log(err);
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            // const { generateAccessToken, generateRefreshToken } = authController
            const newAccToken = authController.generateAccessToken(user);
            const newRfToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRfToken);
            res.cookie("refreshToken", newRfToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            });
            res.status(200).json({
                accessToken: newAccToken
            })
        })
    },
    userLogout: async(req, res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refreshToken);
        console.log("refreshTokens", refreshTokens);
        res.status(200).json("Logged out successfully !");
    }
}
module.exports = authController;