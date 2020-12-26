var mongoose = require('mongoose');
const email = require('./email');


const team = new mongoose.Schema({
    team:String,
    name:String,
    email:String,
    designation:String,
    facebook:String,
    linkedin:String,
    file: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("team",team);