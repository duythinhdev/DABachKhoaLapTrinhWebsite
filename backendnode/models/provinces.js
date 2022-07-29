const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const provincesSchema = mongoose.Schema({
    provinces_code: { type: String, required: false },
    provinces_name: { type: String, required: false },
    districts: [{
        type: Schema.Types.ObjectId,
        ref: 'districts',
        required: false
    }]
}, { timestamps: { createdAt: true, updatedAt: true } }

)
module.exports = mongoose.model("Provinces", provincesSchema);