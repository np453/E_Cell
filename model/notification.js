var mongoose = require('mongoose');

// model for Notifications display
const noti = new mongoose.Schema({
    content:String,
});

module.exports = mongoose.model("noti",noti);