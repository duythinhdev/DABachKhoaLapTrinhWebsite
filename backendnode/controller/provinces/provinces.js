const District = require("../../models/district");
const Provinces = require("../../models/provinces");
const Wards = require("../../models/ward");

exports.postProvinces = async(req, res, next) => {
    const { provinces_code, provinces_name } = req.body;
    const provinces = new Provinces({
        provinces_code: provinces_code,
        provinces_name: provinces_name,
    })
    const postProvinces = provinces.save();
    await postProvinces.then((post) => {
        res.status(201).json({ result: post, status: true })
    }).catch((err) => {
        res.status(400).json({ err: err, status: true })
    })

}
exports.postDistrict = async(req, res, next) => {
    const { provincesId } = req.query;
    const { district_code, district_name } = req.body;
    const newDistrict = new District({
        district_name: district_name,
        district_code: district_code,
    })
    const ProvincesId = await Provinces.findById(provincesId);
    newDistrict.provincesId = ProvincesId;
    await newDistrict.save();
    ProvincesId.districts.push(newDistrict._id);
    await ProvincesId.save();
    try {
        res.status(201).json({ result: newDistrict, status: true });
    }
    catch(e){
        res.status(404).json({ error: e, status: false });
    }
}

exports.postWards = async(req, res, next) => {
    const { districtId } = req.query;
    const { ward_code, ward_name } = req.body;
    const newWards = new Wards({
        ward_code: ward_code,
        ward_name: ward_name,
    })
    const DistrictId = await District.findById(districtId);
    newWards.dicstrictsId = DistrictId;
    await newWards.save();
    DistrictId.wards.push(newWards._id);
    await DistrictId.save();
    try {
        res.status(201).json({ result: newWards, status: true });
    }
    catch(e){
        res.status(404).json({ error: e, status: false });
    }
}

exports.getAllLocation = async(req, res, next)  => {
    const listProvinces = await Provinces.find().populate({
        path: 'districts',
        model: 'Districts',
        populate: {
            path: 'wards',
            model: 'Ward'
        },
    })
    try {
         res.status(200).json({
            result: listProvinces
        })
    } catch (err) {
         res.status(500).json({
            message: err,
        })
    }
}