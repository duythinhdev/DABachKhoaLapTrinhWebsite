const News = require("../../models/news");
const PAGE_SIZE = 10;
exports.PostNews = (req, res, next) => {
    const { update_post, is_show, content, title } = req.body;
    const createNews = new News({
        update_post: update_post,
        is_show: is_show,
        content: content,
        title: title
    })
    createNews.save().then((data) => {
        res.status(200).json({
            data: "Bạn đã thêm news thành công"
        })
    }).catch((error) => {
        res.status(400).json({
            err: error
        })
    });
}
exports.getAllnews = async(req, res, next) => {
    var page = req.query.page;
    if (page) {
        page = parseInt(page);
        if (page < 1) {
            page = 1;
        }
        var skipOption = (page - 1) * PAGE_SIZE;
        var totalPage;
        await News.find({}).exec().then((response) => {
            News.count({}, (err, counts) => {
                totalPage = counts;
            })
        })
        await News.find({})
            .skip(skipOption)
            .limit(PAGE_SIZE).then((response) => {
                return res.status(200).json({
                    total: totalPage,
                    data: response
                })
            }).catch(err => {
                return res.status(404).json({
                    error: err
                })
            })
        return;
    }

    await News.find({}).exec().then((response) => {
            News.count({}, (err, counts) => {
                if (err) {
                    return res.status(404).json({
                        error: err
                    })

                } else {
                    return res.status(200).json({
                        totalPage: counts,
                        data: response,
                    })
                }
            })
        })
        .catch(err => {
            return res.status(404).json({
                error: err
            })
        })
}
exports.newDetails = (req, res, next) => {
    var id = req.query.id
    News.findById(id).then((response) => {
            return res.status(200).json({
                data: response
            })
        })
        .catch(err => {
            return res.status(400).json({
                error: err
            })
        })
}
exports.putNews = async(req, res, next) => {
    const { update_post, is_show, content, title } = req.body;
    var id = req.query.id;
    await News.updateOne({ _id: id }, {
            $set: {
                update_post: update_post,
                is_show: is_show,
                content: content,
                title: title,
            }
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "update table Option success",
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
}
exports.deleteNews = async(req, res, next) => {
    const id = req.query.id;
    await News.remove({ _id: id }).exec().then(response => {
        res.status(200).json({
            message: "delete table Option success",
        })
    }).catch(err => {
        res.status(500).json({ error: err })
        console.log(err);
    })
}