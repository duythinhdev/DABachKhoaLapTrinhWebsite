const express = require('express');
var router = express.Router();
var { postOptionOder } = require("../controller/order_option/order_option");
router.route("/post").post(postOptionOder);

module.exports = router;