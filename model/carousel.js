var mongoose = require('mongoose');


const set = new mongoose.Schema({
    cite:String,
    description:String,
    file: {
        filename:String
    }
});

module.exports = mongoose.model("set",set);