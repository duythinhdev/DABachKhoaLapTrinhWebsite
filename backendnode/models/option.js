const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const optionSchema = mongoose.Schema({
        size: { type: String, max: 128, required: true },
        type: { type: String, max: 128, required: true },
        price: { type: Number, max: 10000000000, required: false },
        quantity: { type: Number, max: 128, required: false },
        code: { type: String, max: 128, required: false },
        specifications: { type: String, required: false },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    }, { timestamps: { createdAt: true, updatedAt: true } }

)

module.exports = mongoose.model("Option", optionSchema);