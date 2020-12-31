var mongoose = require('mongoose');


const frontimgs = new mongoose.Schema({
    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("frontimgs",frontimgs);