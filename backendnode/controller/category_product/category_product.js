const CategoryProduct = require("../../models/category");
const Product = require("../../models/product");
const product = require
const PAGE_SIZE = 10;
exports.postCategoryProduct = (req, res, next) => {
    const product = new CategoryProduct({
        name: req.body.name,
    })
    product.save().then((product) => {
        res.status(200).json({
            data: "Bạn đã thêm thành công"
        })
    }).catch((err) => {
        res.status(400).json({
            err: err
        })
    })
}
exports.getCategoryProduct = async(req, res, next) => {
    var page = req.query.page;
    if (page) {
        page = parseInt(page);
        if (page < 1) {
            page = 1;
        }
        var skipOption = (page - 1) * PAGE_SIZE;
        var totalPage;
        await CategoryProduct.find({}).
        populate('product').exec().then((response) => {
            CategoryProduct.count({}, (err, counts) => {
                totalPage = counts;
            })
        })
        await CategoryProduct.find({})
            .skip(skipOption)
            .limit(PAGE_SIZE).then((response) => {
                return res.status(200).json({
                    total: totalPage,
                    pageNumber: page,
                    data: response
                })
            }).catch(err => {
                return res.status(404).json({
                    error: err
                })
            })
        return;
    }

    await CategoryProduct.find({}).exec().then((response) => {
            CategoryProduct.count({}, (err, counts) => {
                if (err) {
                    return res.status(404).json({
                        error: err
                    })

                } else {
                    return res.status(200).json({
                        totalPage: counts,
                        data: response,
                    })
                }
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err
            })
        })
}
exports.getCategoryProductDetail = (req, res, next) => {
    var id = req.params.id
    CategoryProduct.findById(id).then((response) => {
            return res.status(200).json({
                data: response
            })
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            })
        })
}
exports.putCategoryProduct = async(req, res, next) => {
    var type = req.body.type;
    var size = req.body.size;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var product_id = req.body.product_id;
    var id = req.query.id;
    await CategoryProduct.updateOne({ _id: id }, {
            $set: {
                type: type,
                size: size,
                price: price,
                quantity: quantity,
                product_id: product_id,
            }
        })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "update table Option success",
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
}
exports.deleteCategoryProduct = async(req, res, next) => {
    const id = req.query.id;
    await CategoryProduct.remove({ _id: id }).exec().then(response => {
        res.status(200).json({
            message: "delete table Option success",
        })
    }).catch(err => {
        res.status(500).json({ error: err })
        console.log(err);
    })
}
exports.postRelationShipProduct = async(req, res, next) => {
    const { cateGoryId } = req.query;
    const newProduct = new Product({
        Product_name: req.body.Product_name,
        productImage: req.body.productImage,
        description: req.body.description,
    })
    const CategoryProducts = await CategoryProduct.findById(cateGoryId);
    console.log("CategoryProducts", CategoryProducts)
    newProduct.categoryProduct = CategoryProducts;
    await newProduct.save();
    CategoryProducts.product.push(newProduct);
    await CategoryProducts.save();
    res.status(201).json(newProduct);
}