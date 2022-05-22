const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
        address: { type: String, required: false },
        phone: { type: String, required: false },
        full_name: { type: String, required: false },
        user_id: { type: String, required: false },
        total: { type: Number, required: false },
        status: { type: Number, required: false },
    }, { timestamps: { createdAt: true, updatedAt: true } }

)

module.exports = mongoose.model("Order", orderSchema);