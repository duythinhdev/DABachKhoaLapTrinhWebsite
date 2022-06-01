const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
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
}
const verifyTokenAndUserAuthorization = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log("user", req.params.id);
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        console.log("user", user);
        if (err) {
            res.status(403).json("Token is not valid")
        }
        if (user.userId === req.params.id || user.role === "admin") {
            next();
        } else {
            res.status(403).json("You're not allowed to do that!");
        }
        next();
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if (req.user.role === "admin") {
            next();
        } else {
            res.status(403).json("You're not allowed to do that!");
        }
        next();
    });
};

module.exports = {
    verifyToken,
    verifyTokenAndUserAuthorization,
    verifyTokenAndAdmin,
};