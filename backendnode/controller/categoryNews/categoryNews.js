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
    const { title, content } = req.body;
    const { ctnewsid } = req.query
    var newNews = new News({
        title: title,
        is_show: true,
        content: content
    })
    let CtgoryNews = await CategoryNews.findById(ctnewsid);
    newNews.category_News = CtgoryNews;
    await newNews.save();
    CtgoryNews.News.push(newNews._id);
    await CtgoryNews.save();
    try {
        res.status(201).json({ data: CtgoryNews });
    } catch (err) {
        res.status(404).json({ err: err });
    }
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
    const CtNews = await CategoryNews.findById(categoryNewsId).populate({
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
            data: CtNews.News
        })
    } catch (err) {
        return res.status(500).json({
            message: err,
        })
    }
}