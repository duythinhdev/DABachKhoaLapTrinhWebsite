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
    // var { page, pagesize } = req.query;
    // if (page) {
    //     page = parseInt(page);
    //     pagesize = parseInt(pagesize);
    //     if (page < 1) {
    //         page = 1;
    //     }
    //     var skipOption = (page - 1) * pagesize;
    //     var totalPage;
    //     await CategoryProduct.count({}, (err, counts) => {
    //         totalPage = counts;
    //     })
    //     await CategoryProduct.find({}).populate({
    //             path: 'product',
    //             model: 'Product',
    //             options: {
    //                 // sort: { _id: -1 },
    //                 skip: skipOption,
    //                 limit: pageSize
    //             },
    //             populate: {
    //                 path: 'options',
    //                 model: 'Option'
    //             }
    //         })
    //         .skip(skipOption)
    //         .limit(pagesize).then((response) => {
    //             console.log("response", response)
    //             return res.status(200).json({
    //                 pageNumber: page,
    //                 pagesize: pagesize,
    //                 data: response
    //             })
    //         }).catch(err => {
    //             return res.status(404).json({
    //                 error: err
    //             })
    //         })
    //     return;
    // }
    // var { pagesize } = req.query;

    // pagesize = parseInt(pagesize);

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
        // const { categoryProductId, pagesize, pagenumber } = req.query;
        // await Product.find({ id_categoryProduct: categoryProductId }).populate({
        //         path: 'product',
        //         model: 'Product',
        //         populate: {
        //             path: 'options',
        //             model: 'Option'
        //         },
        //         // options: {
        //         //     sort: { createdAt: -1 },
        //         //     limit: 12
        //         // }
        //     }).then((response) => {
        //         console.log("response", response)
        //         CategoryProduct.count({}, (err, counts) => {
        //             if (err) {
        //                 return res.status(404).json({
        //                     error: err
        //                 })

    //             } else {
    //                 return res.status(200).json({
    //                     totalPage: counts,
    //                     data: response,
    //                 })
    //             }
    //         })
    //     })
    //     .catch(err => {
    //         return res.status(404).json({
    //             error: err
    //         })
    //     })
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
    // exports.putCategoryProduct = async function(req, res, next) {
    //     var type = req.body.type;
    //     var size = req.body.size;
    //     var price = req.body.price;
    //     var quantity = req.body.quantity;
    //     var product_id = req.body.product_id;
    //     var id = req.query.id;
    //     await CategoryProduct.updateOne({ _id: id }, {
    //             $set: {
    //                 type: type,
    //                 size: size,
    //                 price: price,
    //                 quantity: quantity,
    //                 product_id: product_id,
    //             }
    //         })
    //         .exec()
    //         .then(result => {
    //             res.status(200).json({
    //                 message: "update table Option success",
    //             })
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(500).json({ error: err })
    //         });
    // }
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

    // Product.images = urls;
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