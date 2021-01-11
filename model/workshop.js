var mongoose = require('mongoose');

//model for workshop images
const workshop = new mongoose.Schema({
    file: {
        filename:String
    },
});

module.exports = mongoose.model("workshop",workshop);