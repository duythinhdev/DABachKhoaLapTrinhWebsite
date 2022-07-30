const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtsSchema = mongoose.Schema({
    district_code: { type: String, required: false },
    district_name: { type: String, required: false },
    provincesId: {
        type: Schema.Types.ObjectId,
        ref: 'Provinces',
    },
    wards: [{
        type: Schema.Types.ObjectId,
        ref: 'Ward',
        required: false
    }]
}, { timestamps: { createdAt: true, updatedAt: true } }

)
module.exports = mongoose.model("Districts", districtsSchema);