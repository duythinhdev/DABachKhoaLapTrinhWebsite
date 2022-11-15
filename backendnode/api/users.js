const express = require('express');
const router = express.Router();
const { signup, login,  } = require('../controller/user/users');

router.route("/signups").post(signup)
router.route("/login").post(login);

module.exports = router;