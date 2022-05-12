const slider = require("../../models/slider");
const cloudinary = require('../../utils/cloudiary');
const fs = require('fs');
exports.PostSlider = async(req, res, next) => {
    const uploader = async(path) => await cloudinary.uploads(path, 'Image', "slider");
    var urls = [];
    if (req.method === "POST") {
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newPath = await uploader(path);
            console.log("newPath", newPath);
            urls.push(newPath);
            fs.unlinkSync(path);
        }
    }
    var urlImage = new Array();
    urls.forEach((element) => {
        urlImage.push(element.url)
    })
    var newSlider = new slider({
        sliderImage: urlImage,
    })
    await newSlider.save();
    res.status(201).json({ data: newSlider });
}
exports.getSlider = async(req, res, next) => {

}