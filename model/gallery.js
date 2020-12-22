var mongoose = require('mongoose');


const gallery = new mongoose.Schema({
    file: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("gallery",gallery);