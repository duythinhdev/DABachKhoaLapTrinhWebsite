const mongoose = require("mongoose");
const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    User.find({ email: req.body.email }).exec().then(user => {
        if (user.length >= 1) {
            console.log("user", user);
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
                        permission: req.body.permission,
                        is_active: req.body.is_active,
                        address: req.body.address,
                        gender: req.body.gender,
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
                    message: 'Không tìm thấy người dùng'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Đăng nhập thất bại'
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
                        message: 'Đăng nhập Thành công',
                        token: token,
                    })
                }
                res.status(401).json({
                    message: 'Đăng nhập không thành công'
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