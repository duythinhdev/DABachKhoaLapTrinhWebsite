const express = require('express');
const router = express.Router();
const apiNews = require("../controller/news/news");

router.post("/post", apiNews.PostNews);
router.get("/get", apiNews.getAllnews);
router.get("/", apiNews.newDetails);
router.put("/put", apiNews.putNews);
router.delete("/delete", apiNews.deleteNews);


module.exports = router;