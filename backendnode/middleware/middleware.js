const jwt = require('jsonwebtoken');
require('dotenv').config();
const middleware = {
    verifyToken: (req, res, next) => {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if (err) {
                    res.status(403).json("Token is not valid")
                }
                req.userData = user;
                next();
            });
        } else {
            return res.status(401).json({
                message: 'You are not  authenticated'
            })
        }
    },
    verifyTokenAdminAuth: (req, res, next) => {
        middleware.verifyToken(req, res, () => {
            if (req.user.id == req.params.id || req.user.role === "admin") {
                next();
            } else {
                res.status(403).json("You are not allowed to delete other")
            }
        })
    }
}

module.exports = middleware;