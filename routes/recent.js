const router = require('express').Router();
const mongoose = require('mongoose')
const fs = require('fs');
const bp = require('body-parser');
const recent = require('../model/recent');

router.post('/', async(req, res) => {
        
        let msg = new recent({ 
            content:req.body.content
        })
        const savedrecent = await msg.save()

        res.send(savedrecent)

        return res.status(200)
});

router.get('/', async(req, res) => {
  const allrecents = await recent.find({ })
  const recents = [];
  for(let i=0;i<allrecents.length;i++) {
    recents.push( {_id:allrecents[i]._id,route:"recent",content:allrecents[i].content} )
  }
  res.send(recents)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await recent.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})


module.exports = router;