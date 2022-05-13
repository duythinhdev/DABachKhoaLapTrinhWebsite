const mongoose = require('mongoose');

const sliderchema = mongoose.Schema({
    sliderImage: [{ type: String, required: false }],
    sliderImagePromotion: [
        { type: String, required: false }
    ]
}, { timestamps: { createdAt: true, updatedAt: true } })

module.exports = mongoose.model("slider", sliderchema)