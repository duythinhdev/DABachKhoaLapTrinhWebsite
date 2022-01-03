var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
        Product_name: { type: String, required: true },
        productImage: { type: String, required: false },
        description: { type: String, required: false },
        categoryProduct: { type: Schema.Types.ObjectId, ref: 'category_product', required: false }
    }, { timestamps: { createdAt: true, updatedAt: true } }

)

module.exports = mongoose.model("Product", productSchema)