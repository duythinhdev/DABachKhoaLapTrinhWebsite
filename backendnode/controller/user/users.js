const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const httpCode = require('../../httpCode');


exports.signup = (req, res, next) => {
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
                        email: req.body.userName,
                        full_name: req.body.fullName,
                        permission: req.body.permission,
                        is_active: req.body.is_active,
                        address: req.body.address,
                        gender: req.body.gender === 1 ? true : false,
                        phone_number: req.body.phoneNumber,
                        city: req.body.city,
                        ward: req.body.ward,
                        district: req.body.district,
                        birthDay: req.body.birthDay,
                        password: hash
                    });
                    user.save().then(result => {
                            res.status(201).json({
                                message: "Đăng ký tài khoản thành công vui lòng đăng nhập",
                                result: result
                            })
                        })
                        .catch(err => {
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