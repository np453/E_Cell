var mongoose = require('mongoose');

//model for carousel data
const set = new mongoose.Schema({
    cite:String,
    description:String,
    file: {
        filename:String
    }
});

module.exports = mongoose.model("set",set);