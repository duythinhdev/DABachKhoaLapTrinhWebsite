const mongoose = require("mongoose");
const Order = require("../../models/order");

exports.postOrder = (req, res, next) => {
    const { address, phone, full_name, total, status } = req.body;
    const Orders = new Order({
        address: address,
        phone: phone,
        full_name: full_name,
        total: total,
        status: status
    })
    Orders.save().then((response) => {
        res.status(200).json({
            data: response
        })
    }).catch((err) => {
        res.status(400).json({
            err: err
        })
    })
}