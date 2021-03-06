const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false
    }]
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Category_Product", categoryProductSchema)