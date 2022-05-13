const express = require('express');
const router = express.Router();
const { signup, login, forgot, detailsUser } = require('../controller/user/user');
const checkmiddle = require("../middleware/middleware");

router.route("/signups").post(signup)
router.route("/login").post(login);
router.route("/forgot").post(forgot);
router.route("/detail").get(detailsUser);

module.exports = router;