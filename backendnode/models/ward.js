const mongoose = require('mongoose');

const wardsSchema = mongoose.Schema({
    wards: [{
        ward_code: { type: String, required: false },
        ward_name: { type: String, required: false },
    }]
}, { timestamps: { createdAt: true, updatedAt: true } })

module.exports = mongoose.model("ward", wardsSchema);