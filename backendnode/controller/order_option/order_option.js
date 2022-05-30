const order = require("../../models/order");
const option = require("../../models/option");
const order_option = require("../../models/order_option");

exports.postOptionOder = async(req, res, next) => {
    const { orderId, option } = req.query;
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