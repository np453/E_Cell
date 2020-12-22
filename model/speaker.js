var mongoose = require('mongoose');


const speaker = new mongoose.Schema({
    name:String,
    description:String,
    links:String,
    file: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("speaker",speaker);