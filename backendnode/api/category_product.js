const express = require('express');
var router = express.Router();
var {
    postCategoryProduct,
    postRelationShipProduct,
    getCategoryProduct,
    getCategoryProductDetail,
    putCategoryProduct,
    deleteCategoryProduct,
    categoryOfProduct
} = require("../controller/category_product/category_product");
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
router.route("/post").post(postCategoryProduct);
router.route("/pproduct").post(upload.single('productImage'), postRelationShipProduct);
router.route("/get").get(getCategoryProduct);
router.route("/detail/:id").get(getCategoryProductDetail);
router.route("/put").put(putCategoryProduct);
router.route("/delete").delete(deleteCategoryProduct);
router.route("/of").get(categoryOfProduct);
module.exports = router;