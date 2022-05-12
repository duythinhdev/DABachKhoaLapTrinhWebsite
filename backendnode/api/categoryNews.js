const express = require('express');
var router = express.Router();
// const upload = require('../utils/multer');
const { postCategoryNews, getNewOfCategoryNews, postNewofCategoryNews } = require("../controller/categoryNews/categoryNews")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    console.log("file", file);
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.route("/post").post(postCategoryNews);
router.route("/postofNews").post(upload.array("Image"), postNewofCategoryNews);
router.route("/getofNews").get(getNewOfCategoryNews);

module.exports = router;