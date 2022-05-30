const express = require('express');
const router = express.Router();
const { postOrder } = require("../controller/order/order");
router.route("/post").post(postOrder);

module.exports = router;