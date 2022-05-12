const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    // update_post: { type: Date, required: false },
    is_show: { type: Boolean, required: false },
    content: { type: String, required: false },
    title: { type: String, required: false },
    count_show: { type: Number, required: false },
    category_News: {
        type: String,
        required: false
    },
    images: [{
        public_id: {
            type: String,
            required: false,
        },
        url: {
            type: String,
            required: false,
        },
    }, ],
}, { timestamps: { createdAt: true, updatedAt: false } })



module.exports = mongoose.model("news", newsSchema)