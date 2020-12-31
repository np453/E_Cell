var mongoose = require('mongoose');

const sponsor = new mongoose.Schema({
    name:String,
    file: {
        filename:String
    },
});

module.exports = mongoose.model("sponsor",sponsor);