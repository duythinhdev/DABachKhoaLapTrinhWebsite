const express = require('express');
var router = express.Router();
const { postProvinces, postWards, postDistrict, getAllLocation } = require("../controller/provinces/provinces");
router.route("/postprovinces").post(postProvinces);
router.route("/postdistrict").post(postDistrict);
router.route("/postwards").post(postWards);
router.route("/all").get(getAllLocation);

module.exports = router;