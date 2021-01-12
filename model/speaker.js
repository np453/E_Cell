var mongoose = require('mongoose');


//model for speaker data 
const speaker = new mongoose.Schema({
    name:String,
    title:String,
    intro:String,
    description:String,
    file: {
        filename:String 
    },
});

module.exports = mongoose.model("speaker",speaker);