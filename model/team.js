var mongoose = require('mongoose');

// model for team member
const team = new mongoose.Schema({
    team:String,
    name:String,
    email:String,
    designation:String,
    facebook:String,
    linkedin:String,
    file: {
        filename:String 
    },
});

module.exports = mongoose.model("team",team);