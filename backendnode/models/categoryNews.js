const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoryNewsSchema = mongoose.Schema({
    name: { type: String, required: true },
    News: [{
        type: Schema.Types.ObjectId,
        ref: 'news',
        required: false
    }]
}, {
    timestamps: { createdAt: true, updatedAt: true }
})

module.exports = mongoose.model("Category_News", categoryNewsSchema)