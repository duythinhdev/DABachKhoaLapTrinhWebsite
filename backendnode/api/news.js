const express = require('express');
const router = express.Router();
const { PostNews, getAllnews, newDetails, putNews, deleteNews } = require("../controller/news/news");

router.route("/post").post(PostNews);
router.route("/").get(getAllnews);
router.route("/detail").get(newDetails);
router.route("/put").put(putNews);
router.route("/delete").delete(deleteNews);

module.exports = router;