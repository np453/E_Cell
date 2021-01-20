const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const getintouch = require('../model/get_in_touch');


router.post('/', async(req, res) => {
    console.log(req.body.name)
    const contact=new getintouch({
        name:req.body.name,
        email:req.body.email,
        description:req.body.description
    });
    try{
        const contacts = await contact.save();
        res.status(200).send("uploaded");
    }catch(err) {
        res.status(400).send(err);
    }
        
});

router.get('/', async(req, res) => {
  const allgetintouch = await getintouch.find({ })
  const getintouch_ = [];
  for(let i=0;i<allgetintouch.length;i++) {
    getintouch_.push( {_id:allgetintouch[i]._id,route:"getintouch",name:allgetintouch[i].name,email:allgetintouch[i].email,description:allgetintouch[i].description} )
  }
  res.send(getintouch_);
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await getintouch.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;