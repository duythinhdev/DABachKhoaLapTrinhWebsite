const CategoryProduct = require("../../models/category");
const Product = require("../../models/product");
const PAGE_SIZE = 10;
const fs = require('fs');
const cloudinary = require('../../utils/cloudiary')
exports.categoryOfProduct = async function(req, res, next) {
    const { categoryProductId, pagesize, pagenumber } = req.query;
    if (pagenumber < 1) {
        pagenumber = 1;
        pagenumber = parseInt(pagenumber);
        pagesize = parseInt(pagesize);
    }
    var skipOption = (pagenumber - 1) * pagesize;
    var totalPages;
    const CtProduct = await CategoryProduct.findById(categoryProductId).populate({
        path: 'product',
        model: 'Product',
        populate: {
            path: 'options',
            model: 'Option'
        },
        options: {
            sort: {},
            skip: skipOption,
            limit: pagesize
        },
    })
    try {
        return res.status(200).json({
            data: CtProduct.product,
        })
    } catch (err) {
        return res.status(500).json({
            message: err,
        })
    }
}
exports.updateCategoryOfProduct = async(req, res, next) => {
    // number of fields
    const { categoryProductId } = req.value.params

    const body = req.value.body

    let result = await categoryOfProduct.findByIdAndUpdate(categoryProductId, body)

    return res.status(200).json({ data: result })
}

exports.postRelationShipProduct = async(req, res, next) => {
    const uploader = async(path) => await cloudinary.uploads(path, 'Image');
    var urls = [];
    if (req.method === "POST") {
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
    }
    console.log("urls", urls)
    const { cproductId } = req.query;
    var urlImageProduct = new Array();
    urls.forEach((element) => {
            urlImageProduct.push(element.url)
        })
        // Product.productImage.push(urls);
    var newProduct = new Product({
            Product_name: req.body.Product_name,
            productImage: urlImageProduct,
            description: req.body.description,
        })
        // console.log("req.body.productImage", req.body.productImage);
    const CategoryProducts = await CategoryProduct.findById(cproductId);
    newProduct.id_categoryProduct = CategoryProducts;
    await newProduct.save();
    CategoryProducts.product.push(newProduct._id);
    await CategoryProducts.save();
    res.status(201).json({ data: newProduct });
}

exports.postCategoryProduct = function(req, res, next) {
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
exports.getCategoryProduct = async function(req, res, next) {
    var { page, pagesize } = req.query;
    if (page) {
        page = parseInt(page);
        pagesize = parseInt(pagesize);
        if (page < 1) {
            page = 1;
        }
        var skipOption = (page - 1) * pagesize;
        var totalPage;
        await CategoryProduct.count({}, (err, counts) => {
            totalPage = counts;
        })
        await CategoryProduct.find({}).populate({
                path: 'product',
                model: 'Product',
                populate: {
                    path: 'options',
                    model: 'Option'
                }
            })
            .skip(skipOption)
            .limit(pagesize).then((response) => {
                console.log("response", response)
                return res.status(200).json({
                    total: totalPage,
                    pageNumber: page,
                    pagesize: pagesize,
                    data: response
                })
            }).catch(err => {
                return res.status(404).json({
                    error: err
                })
            })
        return;
    }

    await CategoryProduct.find({}).populate({
            path: 'product',
            model: 'Product',
            populate: {
                path: 'options',
                model: 'Option'
            }
        }).then((response) => {
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
exports.getCategoryProductDetail = function(req, res, next) {
    const name = req.query.name
    CategoryProduct.findOne({
            'name': name
        }).then((response) => {
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
exports.putCategoryProduct = async function(req, res, next) {
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
            res.status(200).json({
                message: "update table Option success",
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
}
exports.deleteCategoryProduct = async function(req, res, next) {
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