var mongoose = require('mongoose');


const ispeaker = new mongoose.Schema({
    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("ispeaker",ispeaker);