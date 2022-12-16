const express = require('express');
const router = express.Router();
const { signup, login,getDetail  } = require('../controller/user/users');
const { middlewares } = require('../middleware/middlewares');

router.post("/signups",signup);
router.post("/login",login);
router.get("/detail", middlewares, getDetail)

module.exports = router;