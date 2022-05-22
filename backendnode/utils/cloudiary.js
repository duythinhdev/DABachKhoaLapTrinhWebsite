require('dotenv').config();
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// module.exports = { cloudinarys };
const data = [];
exports.uploads = async(file, folders) => {
    let result = await cloudinary.v2.uploader.upload(file, { folder: folders })
    data.push({
        public_id: result.public_id,
        url: result.url,
    });
    console.log("data", data);
    return data
}