const CategoryProduct = require("../../models/category");
const Product = require("../../models/product");
const PAGE_SIZE = 10;
const fs = require('fs');
const cloudinary = require('../../utils/cloudiary')
const mongoosePaginate = require('mongoose-paginate-v2');

exports.categoryOfProduct = async function(req, res, next) {
    const { categoryProductId, pagesize, pagenumber } = req.query;
    if (pagenumber < 1) {
        pagenumber = 1;
    }
    let pageNumber = parseInt(pagenumber);
    let pageSize = parseInt(pagesize);
    var skipOption = (pageNumber - 1) * pageSize;
    const countCtProduct = await Product.count({ id_categoryProduct: categoryProductId });
    const CtProduct = await CategoryProduct.findById(categoryProductId).populate({
        path: 'product',
        model: 'Product',
        populate: {
            path: 'options',
            model: 'Option'
        },
        options: {
            // sort: { _id: -1 },
            skip: skipOption,
            limit: pageSize
        }
    })
    try {
        return res.status(200).json({
            totalPage: countCtProduct,
            data: CtProduct.product
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

    await CategoryProduct.find().populate({
            path: 'product',
            model: 'Product',
            options: {
                // sort: { createdAt: -1 },
                limit: 12
            },
            populate: {
                path: 'options',
                model: 'Option'
            },
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
exports.putCategoryProduct = async(req, res, next) => {
        // number of fields
        const { categoryID } = req.query

        const newCategory = req.value.body

        const result = await CategoryProduct.findByIdAndUpdate(categoryID, newCategory)

        return res.status(200).json({ success: true })
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
exports.postRelationShipProduct = async(req, res, next) => {
    const uploader = async(path) => await cloudinary.uploads(path, 'Products');
    var urls;
    if (req.method === "POST") {
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            let newPath = await uploader(path);
            urls = newPath;
            fs.unlinkSync(path);
        }
    }
    req.body.productImage = urls
    const { cproductId } = req.query;
    var newProduct = new Product({
        Product_name: req.body.Product_name,
        images: req.body.productImage,
        description: req.body.description
    })
    const CategoryProducts = await CategoryProduct.findById(cproductId);
    newProduct.id_categoryProduct = CategoryProducts;
    await newProduct.save();
    CategoryProducts.product.push(newProduct._id);
    await CategoryProducts.save();
    res.status(201).json({ data: newProduct });
}
exports.categoryProductDetail = (req, res, next) => {
    var { id } = req.query
    CategoryProduct.findById(id).then((response) => {
        return res.status(200).json({
            data: response
        })
    }).catch(err => res.status(404).json({ error: err }))
}