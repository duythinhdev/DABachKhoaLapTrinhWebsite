const express = require('express');
var router = express.Router();
var {
    postCategoryProduct,
    postRelationShipProduct,
    getCategoryProduct,
    categoryProductDetail,
    putCategoryProduct,
    deleteCategoryProduct,
    categoryOfProduct
} = require("../controller/category_product/category_product");
const upload = require('../utils/multer');

router.route("/post").post(postCategoryProduct);
router.route("/get").get(getCategoryProduct);
router.route("/detail").get(categoryProductDetail);
router.route("/put").put(putCategoryProduct);
router.route("/delete").delete(deleteCategoryProduct);
router.route("/of").get(categoryOfProduct);
router.route("/pproduct").post(upload.array('productImage'), postRelationShipProduct);

module.exports = router;