var mongoose = require('mongoose');

// model for the ecell works for whatwedo section
const works = new mongoose.Schema({
    title:String,
    description:String,
    file: {
        filename:String
    }
});

module.exports = mongoose.model("works",works);