var mongoose = require('mongoose');

//model for front image showcase
const frontimgs = new mongoose.Schema({
    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("frontimgs",frontimgs);