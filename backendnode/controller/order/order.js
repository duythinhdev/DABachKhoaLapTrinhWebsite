const mongoose = require("mongoose");
const Order = require("../../models/order");
const User = require("../../models/user");

exports.postOrder = async(req, res, next) => {
    const { address, phone, full_name, total, status, orders } = req.body;
    const newOrders = new Order({
        address: address,
        phone: phone,
        full_name: full_name,
        total: total,
        status: status,
        orders: orders
    })
    const Users = await User.findById(req.userData.userId);
    newOrders.user = Users;
    await newOrders.save();
    Users.order.push(newOrders._id);
    await Users.save();
    try {
        res.status(201).json({ data: newOrders })
    } catch (err) {
        res.status(400).json({
            error: err
        })
    }
}
exports.getOrderOfUser = async function(req, res, next) {
    const { orderId, pagesize, pagenumber } = req.query;
    if (pagenumber < 1) {
        pagenumber = 1;
    }
    let pageNumber = parseInt(pagenumber);
    let pageSize = parseInt(pagesize);
    var skipOption = (pageNumber - 1) * pageSize;
    const countOder = await Order.count({ user: req.userData.userId });
    const Users = await User.findById(req.userData.userId).populate({
        path: 'order',
        model: 'Order',
        options: {
            // sort: { _id: -1 },
            skip: skipOption,
            limit: pageSize
        }
    })
    console.log("Users", Users);
    try {
        return res.status(200).json({
            totalPage: countOder,
            data: Users.order
        })
    } catch (err) {
        return res.status(500).json({
            message: err,
        })
    }

}