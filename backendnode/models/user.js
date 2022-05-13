const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: { type: String, required: true },
    permission: { type: Number, required: false },
    full_name: { type: String, required: false },
    address: { type: String, required: false },
    phone_number: { type: String, required: false },
    city: { type: String, required: false },
    gender: { type: Boolean, required: false },
    role: {
        type: String,
        default: "user",
    },
})

module.exports = mongoose.model("User", userSchema)