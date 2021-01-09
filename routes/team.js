const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const team = require("../model/team")
const bp = require('body-parser')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/media/team')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        
        let member = new team({
            team:req.body.team,
            name:req.body.name,
            email:req.body.email,
            designation:req.body.designation,
            facebook:req.body.facebook,
            linkedin:req.body.linkedin,
            file : {
              filename:req.file.filename
            }
        })
        const savedmember = await member.save()
        res.send(savedmember)
        
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          } 
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allmembers = await team.find({ })
  const members = [];
  for(let i=0;i<allmembers.length;i++) {
    members.push( {_id:allmembers[i]._id,route:"team",team:allmembers[i].team,name:allmembers[i].name,email:allmembers[i].email,designation:allmembers[i].designation,
        facebook:allmembers[i].facebook,linkedin:allmembers[i].linkedin,filename:allmembers[i].file.filename} )
  }
  res.send(members)
    
 });
router.put('/delete/:id',async(req,res)=>{
  const data = await team.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;