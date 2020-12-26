const express = require('express');
const app = express();
const multer = require('multer')
const cors = require('cors');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const auth = require('./routes/auth');
const team = require('./routes/team');
const gallery = require('./routes/gallery');
const speaker = require('./routes/speaker');
const whatwedo = require('./routes/whatwedo');
//Models

//Port
const PORT = 1212;

//.env file
dotenv.config();


//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use('/gallery', gallery);
app.use('/admin', auth);
app.use('/team', team);
app.use('/speaker', speaker);
app.use('/works', whatwedo);
app.use('/sponsor', speaker);

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));
app.use(express.static("client/build"));



app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT, function() {
    console.log('App running on port 1212');
});
 