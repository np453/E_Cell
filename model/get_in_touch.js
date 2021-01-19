const mongoose = require('mongoose');

//mongo model for admin login and register
const getintouch = new mongoose.Schema({
    name:String,
    email:String,
    description:String
})

module.exports = mongoose.model('getintouch', getintouch);