var mongoose = require('mongoose');

// model for showcase images for events
const showcase = new mongoose.Schema({
    name:String,
    quote:String,    
    file: {
        filename:String
    }
});

module.exports = mongoose.model("showcase",showcase);