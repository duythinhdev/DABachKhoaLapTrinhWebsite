const express = require('express');
var router = express.Router();
const { PostSlider, getSlider } = require("../controller/slider/slider");
const upload = require("../utils/multer")

router.route("/post").post(upload.array('Image'), PostSlider);
router.route("/get").get(getSlider);

module.exports = router;