const express = require('express');
const router = express.Router();
const { postOrder, getOrderOfUser } = require("../controller/order/order");
const { verifyToken } = require("../middleware/middleware");

router.route("/post").post(verifyToken, postOrder);
router.route("/get").get(verifyToken, getOrderOfUser);

module.exports = router;