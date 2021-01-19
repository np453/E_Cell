const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const getintouch = require('../model/get_in_touch');


router.post('/', async(req, res) => {
    
       
});

router.get('/', async(req, res) => {
  const allWorks = await Works.find({ })
  const works = [];
  for(let i=0;i<allWorks.length;i++) {
    works.push( {_id:allWorks[i]._id,route:"works",title:allWorks[i].title,description:allWorks[i].description,
         filename:allWorks[i].file.filename} )
  }
  res.send(works)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await Works.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;