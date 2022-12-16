const User = require("../../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const MESSAGE_LOGIN_SUCCESS = 'Đăng nhập Thành công';
const MESSAGE_LOGIN_FAILED = 'Đăng nhập thất bại';
const MESSAGE_LOGIN_DONT_FIND_USER = 'Không tìm thấy người dùng';
const MESSAGE_MAIL_EXISTS = 'Mail exists';
const MESSAGE_REGISTER_FAILEDS = "Đăng ký tài khoản thành công vui lòng đăng nhập";
const HTTP_CONFLICT_CODE = 409;
const HTTP_INTERNAL_SERVER = 500;
const HTTP_CREATE_SUCCESS = 201;
const HTTP_ERROR = 400;
const HTTP_SUCCESS = 200;
const LENGTH_USER = 1;
exports.signup = (req, res, next) => {
    User.find({ email: req.body.email }).exec().then(user => {
        if (user.length >= LENGTH_USER) {
            return res.status(HTTP_CONFLICT_CODE).json({
                message: MESSAGE_MAIL_EXISTS
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(HTTP_INTERNAL_SERVER).json({
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
                            res.status(HTTP_CREATE_SUCCESS).json({
                                message: MESSAGE_REGISTER_FAILEDS,
                                result: result
                            })
                        })
                        .catch(err => {
                            res.status(HTTP_INTERNAL_SERVER).json({
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
                    message: MESSAGE_LOGIN_DONT_FIND_USER
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: MESSAGE_LOGIN_FAILED
                    })
                }
                if (result) {
                    const token = generateAccessToken(user[0]);
                    return res.status(HTTP_SUCCESS).json({
                        message: MESSAGE_LOGIN_SUCCESS,
                        token: token,
                    })
                }
                res.status(401).json({
                    message: MESSAGE_LOGIN_FAILED
                })
            })
        })
        .catch(err => {
            console.log(err)
            res.status(HTTP_INTERNAL_SERVER).json({
                error: err
            })
        });
}
exports.getDetail = (req, res, next) => {
    console.log("req",req.userData);
    const idUser = req.userData.userId;
    console.log("idUser",idUser);
    User.findById(idUser).then((response) => {
            return res.status(HTTP_SUCCESS).json({
                data: response
            })
        })
        .catch(err => {
            return res.status(HTTP_ERROR).json({
                error: err
            })
        })
}
function generateAccessToken (user) {
    return jwt.sign({
        email: user.email,
        userId: user._id,
        role: user.role,
    }, process.env.ACCESS_KEY, {
        expiresIn: "7d"
    })
};