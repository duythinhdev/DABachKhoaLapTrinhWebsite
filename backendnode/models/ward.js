const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wardsSchema = mongoose.Schema({
    ward_code: { type: String, required: false },
    ward_name: { type: String, required: false },
    dicstrictsId: {
        type: Schema.Types.ObjectId,
        ref: 'Districts'
    }
}, { timestamps: { createdAt: true, updatedAt: true } })

module.exports = mongoose.model("Ward", wardsSchema);