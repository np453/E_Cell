const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const sets = require('../model/carousel');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/carousel')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
    
        let work = new sets({
            cite:req.body.cite,
            description:req.body.description,
            file : {
              filename:req.file.filename
            }
        })
        const savedWork = await work.save()
        res.send(savedWork)
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allsets = await sets.find({ })
  const Sets = [];
  for(let i=0;i<allsets.length;i++) {
    Sets.push( {_id:allsets[i]._id,cite:allsets[i].cite,description:allsets[i].description,
         buffer:Buffer.from(allsets[i].file.data.buffer, 'base64').toString('base64'), contentType:allsets[i].file.contentType} )
  }
  res.send(Sets)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await sets.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;