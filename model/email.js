const mongoose = require('mongoose');

const email = new mongoose.Schema({
    email:String
})

const mail = new mongoose.Schema({
    emails:[email]
})

module.exports = mongoose.model('mail', mail);