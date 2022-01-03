const express = require('express');
const router = express.Router();
const CategoryController = require("../controller/category_product/category_product");
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
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
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

router.post("/post", CategoryController.postCategoryProduct);
router.post("/postOfProduct", upload.single('productImage'), CategoryController.postRelationShipProduct);
router.get("/get", CategoryController.getCategoryProduct);
router.get("/getdetail/:id", CategoryController.getCategoryProductDetail);
router.put("/put", CategoryController.putCategoryProduct);
router.delete("/delete", CategoryController.deleteCategoryProduct);

module.exports = router;