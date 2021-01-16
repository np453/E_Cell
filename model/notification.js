var mongoose = require('mongoose');

// model for Notifications display
const date= new Date;
const localedate= date.toLocaleDateString();
const noti = new mongoose.Schema({
    content:String,
    created_at:{ type:String, default:localedate}
});

module.exports = mongoose.model("noti",noti);