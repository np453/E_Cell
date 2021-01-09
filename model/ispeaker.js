var mongoose = require('mongoose');

//model for speaker display imgs for hex grid
const ispeaker = new mongoose.Schema({
    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("ispeaker",ispeaker);