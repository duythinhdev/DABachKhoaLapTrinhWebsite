const express = require('express');
const router = express.Router();
const { signup, login, forgot } = require('../controller/user/user');
const checkmiddle = require("../middleware/middleware");

router.route("/signups").post(signup)
router.route("/login").post(login);
router.route("/forgot").post(forgot);

module.exports = router;