const CategoryNews = require("../../models/categoryNews");
const News = require("../../models/news");
const cloudinary = require('../../utils/cloudiary');
const fs = require('fs');

exports.postCategoryNews = async(req, res, next) => {
    const { news } = req.body;
    const CtNews = new CategoryNews({
        name: news
    });
    await CtNews.save().then((response) => {
        res.status(201).json({ data: response })
    }).catch(err => res.status(404).json({ error: err }))
}
exports.putCategoryNews = async(req, res, next) => {
    // number of fields
    const { idCategorynews } = req.query

    const { name } = req.body

    const result = await CategoryNews.findByIdAndUpdate(idCategorynews, name)

    return res.status(200).json({ data: result })
}
exports.getNewsofCategoryNews = async(req, res, next) => {
    const { idCategorynews, pagesize, pagenumber } = req.query;
    const ctNews = await CategoryNews.find().populate({
        path: 'news',
        model: 'news',
        options: {
            limit: 4,
        }
    })
    try {
        res.status(200).json({
            data: ctNews,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
exports.countViewNews = async(req, res, next) => {}
exports.postNewofCategoryNews = async(req, res, next) => {
    const uploader = async(path) => await cloudinary.uploads(path, 'News');
    var urls;
    if (req.method === "POST") {
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            let newPath = await uploader(path);
            urls = newPath;
            fs.unlinkSync(path);
        }
    }
    req.body.Image = urls
    const { ctnewsid } = req.query
    var newNews = new News({
        title: req.body.title,
        is_show: true,
        content: req.body.content,
        images: req.body.Image,
    })
    const CtgoryNews = await CategoryNews.findById(ctnewsid);
    newNews.category_News = CtgoryNews;
    await newNews.save();
    CtgoryNews.news.push(newNews._id);
    await CtgoryNews.save();
    res.status(201).json({ data: CtgoryNews });
}
exports.getAllCategoryNews = async(req, res, next) => {

}
exports.getNewOfCategoryNews = async(req, res, next) => {
    const { categoryNewsId, pagesize, pagenumber } = req.query;
    if (pagenumber < 1) {
        pagenumber = 1;
        pagenumber = parseInt(pagenumber);
        pagesize = parseInt(pagesize);
    }
    var skipOption = (pagenumber - 1) * pagesize;
    const ctNews = await CategoryNews.findById(categoryNewsId).populate({
        path: 'news',
        model: 'News',
        options: {
            // sort: { _id: -1 },
            skip: skipOption,
            limit: pagesize
        },
    })
    try {
        return res.status(200).json({
            data: ctNews.News
        })
    } catch (err) {
        return res.status(500).json({
            message: err,
        })
    }
}