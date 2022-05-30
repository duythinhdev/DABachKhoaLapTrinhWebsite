const express = require('express');
const router = express.Router();
const { signup, login, forgot, detailsUser, deleteUser } = require('../controller/user/user');
const { verifyToken, verifyTokenAdminAuth } = require("../middleware/middleware");

router.route("/signups").post(signup)
router.route("/login").post(login);
router.route("/forgot").post(forgot);
router.route("/delete/:id").delete(verifyTokenAdminAuth, deleteUser);
router.route("/detail").get(verifyToken, detailsUser);

module.exports = router;