var mongoose = require('mongoose');

const speaker = new mongoose.Schema({
    name:String,
    description:String,
    file: {
        filename:String 
    },
});

module.exports = mongoose.model("speaker",speaker);