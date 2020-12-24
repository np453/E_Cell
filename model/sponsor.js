var mongoose = require('mongoose');

const sponsor = new mongoose.Schema({
    name:String,
    file: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("sponsor",sponsor);