var mongoose = require('mongoose');

//model for galley images
const gallery = new mongoose.Schema({
    file: {
        filename:String
    },
});

module.exports = mongoose.model("gallery",gallery);