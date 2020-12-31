var mongoose = require('mongoose');


const gallery = new mongoose.Schema({
    file: {
        filename:String
    },
});

module.exports = mongoose.model("gallery",gallery);