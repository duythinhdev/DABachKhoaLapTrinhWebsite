const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    update_post: { type: Date },
    is_show: { type: Boolean },
    content: { type: String },
    title: { type: String }

}, { timestamps: { createdAt: true, updatedAt: false } })



module.exports = mongoose.model("news", newsSchema)