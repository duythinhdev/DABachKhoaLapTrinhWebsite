const express = require('express');
const router = express.Router();
const {
    postProductofCategory,
    postProductofOption,
    getProduct,
    getProductDetail,
    putProduct,
    deleteProduct,
    postProduct,
    postClouldiary
} = require("../controller/products/products");
const uploads = require("../utils/multer");

router.route("/posts/:productId").post(postProductofCategory);
router.route("/postofoption").post(postProductofOption);
router.route("/get").get(getProduct);
router.route("/getdetail").get(getProductDetail);
router.route("/put").put(uploads.single('productImage'), putProduct);
router.route("/delete").delete(deleteProduct);
router.route("/postdata").post(uploads.array('productImage'), postProduct);
router.route("/api/upload").post(uploads.array('productImage'), postClouldiary);

module.exports = router;