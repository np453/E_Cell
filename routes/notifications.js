const router = require('express').Router();
const mongoose = require('mongoose')
const fs = require('fs');
const bp = require('body-parser');
const notification = require('../model/notification');

router.post('/', async(req, res) => {
        let msg = new notification({ 
            content:req.body.content
        })
        const savednotification = await msg.save()

        res.send(savednotification)

        return res.status(200)
});

router.get('/', async(req, res) => {
  const allnotifications = await notification.find({ })
  const notifications = [];
  console.log(allnotifications)
  for(let i=0;i<allnotifications.length;i++) {
    notifications.push( {_id:allnotifications[i]._id,route:"notification",content:allnotifications[i].content, created_at:allnotifications[i].created_at } )
  }
  res.send(notifications)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await notification.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})


module.exports = router;