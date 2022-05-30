const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderOptionSchema = mongoose.Schema({
        order_id: [{
            type: Schema.Types.ObjectId,
            ref: 'Order',
            required: false
        }],
        option_id: [{
            type: Schema.Types.ObjectId,
            ref: 'Option',
            required: false
        }],
        total: { type: Number, required: false },
        quantity: { type: Number, required: false },
    }, { timestamps: { createdAt: true, updatedAt: true } }

)

module.exports = mongoose.model("Order_Option", orderOptionSchema);