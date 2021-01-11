var mongoose = require('mongoose');

//model for seminar images
const seminar = new mongoose.Schema({
    file: {
        filename:String
    },
});

module.exports = mongoose.model("seminar",seminar);