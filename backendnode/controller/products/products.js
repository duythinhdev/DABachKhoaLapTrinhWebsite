const Product = require("../../models/product");
const CategoryProduct = require("../../models/category");
const Option = require("../../models/option");
const fs = require('fs');
const cloudinary = require('../../utils/cloudiary');
const ApiFeatures = require("../../utils/apifeatures");

const PAGE_SIZE = 10;
exports.postProduct = async(req, res, next) => {
    const { Product_name, path, description } = req.body;
    const product = new Product({
        Product_name: Product_name,
        productImage: path,
        description: description,
    })
    let postProduct = product.save();
    await postProduct.then((productData) => {
        res.status(201).json({ data: productData })
    }).catch((err) => {
        res.status(400).json({ err: err })
    })

}
exports.postProductofCategory = async(req, res, next) => {
    const { productId } = req.params;
    var newCategoryProduct;
    newCategoryProduct = new CategoryProduct(req.body);
    const Products = await Product.findById(productId);
    newCategoryProduct.product = Products;
    await newCategoryProduct.save();
    Products.id_categoryProduct.push(newCategoryProduct._id);
    await Products.save()
    res.status(201).json({ data: newCategoryProduct });
}
exports.postProductofOption = async(req, res, next) => {
    const { productid } = req.query;
    const {
        specifications,
        size,
        type,
        price,
        quantity,
        code,
    } = req.body;
    const newOption = new Option({
        specifications: specifications,
        size: size,
        type: type,
        price: price,
        quantity: quantity,
        code: code
    });
    const Products = await Product.findById(productid);
    newOption.product = Products;
    await newOption.save();
    Products.options.push(newOption._id);
    await Products.save()
    res.status(201).json({ data: newOption });
}
exports.getProduct = async(req, res, next) => {
    var { page } = req.query;
    if (page) {
        page = parseInt(page);
        if (page < 1) {
            page = 1;
        }
        var skipOption = (page - 1) * PAGE_SIZE;
        var totalPage;
        await Product.find({}).
        populate('categoryProduct').exec().then((response) => {
            Product.count({}, (err, counts) => {
                totalPage = counts;
            })
        })
        await Product.find({})
            .skip(skipOption)
            .limit(PAGE_SIZE).then((response) => {
                return res.status(200).json({
                    total: totalPage,
                    data: response
                })
            }).catch(err => {
                return res.status(404).json({
                    error: err
                })
            })
        return;
    }

    await Product.find({}).exec().then((response) => {
            Product.count({}, (err, counts) => {
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
exports.getProductDetail = (req, res, next) => {
    var { id } = req.query
    Product.findById(id).populate({
        path: 'options',
        model: 'Option',
    }).then((response) => {
        return res.status(200).json({
            data: response
        })
    }).catch(err => res.status(404).json({ error: err }))
}
exports.putProduct = async(req, res, next) => {
    var { Product_name, productImage, description } = req.body;
    var { id } = req.query;
    await Product.updateOne({ _id: id }, {
            $set: {
                Product_name: Product_name,
                productImage: productImage,
                description: description,
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
exports.deleteProduct = async(req, res, next) => {
    const id = req.query.id;
    await Product.remove({ _id: id }).exec().then(response => {
        res.status(200).json({
            message: "delete table Option success",
        })
    }).catch(err => {
        res.status(500).json({ error: err })
        console.log(err);
    })
}
exports.postClouldiary = async(req, res, next) => {
    const uploader = async(path) => await cloudinary.uploads(path, 'Image')
    if (req.method === "POST") {
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
        res.status(200).json({
            "message": 'Image Uploaded Successfully',
            data: urls
        })
    } else {
        res.status(405).json({
            "err": 'Image Not Uploaded Successfully',
        })
    }
}
exports.filterProduct = async(req, res, next) => {
    const { product_name } = req.query;
    const apiFeature = new ApiFeatures(Product.find(), product_name)
        .search()

    let products = await apiFeature.query;
    try {
        res.status(200).json({
            data: products
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}