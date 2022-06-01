const express = require('express');
const router = express.Router();
const { signup, login, forgot, detailsUser, deleteUser, requestRefeshToken, userLogout, changePassword } = require('../controller/user/user');
const { verifyToken, verifyTokenAndUserAuthorization } = require("../middleware/middleware");

router.route("/signups").post(signup)
router.route("/login").post(login);
router.route("/logout").post(verifyToken, userLogout);
router.route("/forgot").post(forgot);
router.route("/refresh").post(requestRefeshToken);
router.route("/delete/:id").delete(verifyTokenAndUserAuthorization, deleteUser);
router.route("/change").post(verifyToken, changePassword);
router.route("/detail").get(verifyToken, detailsUser);

module.exports = router;