var mongoose = require('mongoose');

// model for sponsor data
const sponsor = new mongoose.Schema({
    name:String,
    sponsorlink:String,
    file: {
        filename:String
    },
});

module.exports = mongoose.model("sponsor",sponsor);