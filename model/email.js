const mongoose = require('mongoose');

const mail = new mongoose.Schema({
    email:String
})

module.exports = mongoose.model('mail', mail);