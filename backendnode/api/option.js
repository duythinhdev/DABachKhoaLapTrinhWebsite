const express = require('express');
const router = express.Router();
const { postOption, getOption, getOptionDetail, deleteOption, putOption } = require("../controller/option/option");

router.route("/post").post(postOption);
router.route("/get").get(getOption);
router.route("/getdetail/:id").get(getOptionDetail);
router.route("/put").put(putOption);
router.route("/delete").delete(deleteOption);

module.exports = router;