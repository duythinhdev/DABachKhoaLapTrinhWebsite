const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.middlewares = (req, res, next) =>{
    // try{
        const token = req.headers.authorization?.split(" ")[0];
        console.log("req.headers.authorization",req.headers.authorization);
        console.log("token",token);
        if (token == null)  return res.status(401).json({
            message: 'Auth failed'
        })
        // console.log("token",req.headers.authorization.split(" ")[0]);
        jwt.verify(token,process.env.ACCESS_KEY, (err, user) => {
            console.log(err)        
            if (err) return res.sendStatus(403)
        
            req.userData = user
        
            next()
          });
        // console.log("decoded",decoded);
        // req.userData = decoded;
        // console.log(req.userData);
    // } catch (error){
    //     return res.status(401).json({
    //         message: 'Auth failed'
    //     })
    // }
    // next();
}