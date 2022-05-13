const mongoose = require("mongoose");
const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../../utils/sendEmail');

exports.signup = (req, res, next) => {
    console.log("req.body", req.body);
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
}

exports.login = (req, res, next) => {
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
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id,
                    }, process.env.SECRET_KEY, {
                        expiresIn: "7d"
                    })
                    return res.status(200).json({
                        message: 'Auth success',
                        accessToken: token,
                    })
                }
                res.status(401).json({
                    message: 'Auth failed3'
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
}
exports.forgot = async(req, res, next) => {
    var content = '';
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                <span style="color: black">Đây là mail test</span>
            </div>
        </div>
    `;
    let options = {
        email: req.body.email,
        subject: 'Test Nodemailer',
        message: content,
    }
    await sendEmail(options, req, res);
}
exports.detailsUser = (req, res, next) => {
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
}