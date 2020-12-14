
const mongoose = require('mongoose')
module.exports = new mongoose.Schema({
    usr_name: String,
    usr_email: String,
    usr_password: String,
    date: String,
    day: String,
    month: String,
    year: String,
    time: String,
    wallet: String,
    orders: String,
    transaction: String,
    role: {
        type: Boolean,
        default: false
    }
});

