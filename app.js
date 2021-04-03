const express = require('express');
const app = express();
// const helmet = require('helmet')
const multer = require('multer')
const cors = require('cors');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

// Routes
const auth = require('./routes/auth');
const team = require('./routes/team');
const gallery = require('./routes/gallery');
const speaker = require('./routes/speaker');
const whatwedo = require('./routes/whatwedo');
const sponsor = require('./routes/sponsor');
const front = require('./routes/front');
const ispeaker = require('./routes/ispeaker');
const contact = require('./routes/contact');
const showcase = require('./routes/showcase');
const carousel = require('./routes/carousel');
const notifications = require('./routes/notifications');
const recent = require('./routes/recent');
const workshop = require('./routes/workshop');
const seminar = require('./routes/seminar');
const getintouch = require('./routes/get_in_touch');
 
//Port
const PORT = 1212;

//.env file
dotenv.config();


//Middlewaress
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());



// Routes initialization
app.use('/api/gallery', gallery);
app.use('/api/admin', auth);
app.use('/api/team', team);
app.use('/api/speaker', speaker);
app.use('/api/works', whatwedo);
// app.use('/api/sponsor', sponsor);
app.use('/api/ispeaker', ispeaker);
app.use('/api/front', front);
app.use('/api/contact', contact);
app.use('/api/showcase', showcase);
app.use('/api/carousel', carousel);
app.use('/api/notifications', notifications);
app.use('/api/recent', recent);
app.use('/api/workshop', workshop);
app.use('/api/seminar', seminar);
app.use('/api/getintouch', getintouch);


//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database is connected!"));



// Media APIs

app.get('/media/front/:file_name',(req,res)=>{
  
  res.sendFile(path.join(__dirname+"/media/front/"+req.params.file_name));
  
})

app.get('/media/sponsor/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/sponsor/"+req.params.file_name));
})

app.get('/media/speaker/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/speaker/"+req.params.file_name));
})

app.get('/media/team/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/team/"+req.params.file_name));
})

app.get('/media/ispeaker/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/ispeaker/"+req.params.file_name));
})

app.get('/media/works/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/works/"+req.params.file_name));
})

app.get('/media/showcase/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/showcase/"+req.params.file_name));
})
app.get('/media/assets/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/assets/"+req.params.file_name));
})
app.get('/media/gallery/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/gallery/"+req.params.file_name));
})
app.get('/media/carousel/:file_name',(req,res)=>{
  res.sendFile(path.join(__dirname+"/media/carousel/"+req.params.file_name));
})

app.use(express.static('client/build'));

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, function() {
    console.log('App running on port 1212');
}); 
 