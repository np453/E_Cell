var mongoose = require('mongoose');


const showcase = new mongoose.Schema({
    name:String,
    quote:String,    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("showcase",showcase);