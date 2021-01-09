const mongoose = require('mongoose');

//mongo model for admin login and register
const admin = new mongoose.Schema({
    email:String,
    password:String
})

module.exports = mongoose.model('admin', admin);