var mongoose = require('mongoose');


const works = new mongoose.Schema({
    title:String,
    description:String,
    file: {
        filename:String
    }
});

module.exports = mongoose.model("works",works);