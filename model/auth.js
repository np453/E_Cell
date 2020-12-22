const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('admin', admin);