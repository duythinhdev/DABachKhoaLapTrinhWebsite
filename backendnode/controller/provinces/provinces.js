const Product = require("../../models/district");
const provinces = require("../../models/provinces");
const ward = require("../../models/ward");


exports.postProvinces = async(req, res, next) => {
    const { provinces_code, provinces_name } = req.body;
    const provinces = new provinces({
        provinces_code: provinces_code,
        provinces_name: provinces_name,
    })
    const postProvinces = provinces.save();
    await postProduct.then((postProvinces) => {
        res.status(201).json({ data: postProvinces })
    }).catch((err) => {
        res.status(400).json({ err: err })
    })

}