var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
        Product_name: { type: String, required: true },
        productImage: { type: String, required: false },
        description: { type: String, required: false },
        id_categoryProduct: {
            type: Schema.Types.ObjectId,
            ref: 'Category_Product',
        }
    }, { timestamps: { createdAt: true, updatedAt: true } }

)

module.exports = mongoose.model("Product", productSchema)