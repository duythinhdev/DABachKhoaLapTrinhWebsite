const express = require('express');
var router = express.Router();

router.route("/post").post();
router.route("/get").get();

module.exports = router;