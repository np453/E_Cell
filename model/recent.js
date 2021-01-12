var mongoose = require('mongoose');

// model for Recent Notifications display
const recent = new mongoose.Schema({
    content:String,
});

module.exports = mongoose.model("recent",recent);