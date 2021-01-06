const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const frontimgs = require('../model/front');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/front')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        let img = new frontimgs({
            file : {
                filename:req.file.filename
            }
        })
        const savedimg = await img.save()
        res.send(savedimg)
        
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          } 
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allimgs = await frontimgs.find({ })
  const imgs = [];
  for(let i=0;i<allimgs.length;i++) {
    imgs.push( {_id:allimgs[i]._id,route:"front",filename:allimgs[i].file.filename} )
  }
  res.send(imgs)
    
 });

 router.put('/delete/:id',async(req,res)=>{
    const data = await frontimgs.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
    res.send(data);
  
  })

module.exports = router;