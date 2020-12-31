const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const gallery = require("../model/gallery")
const bp = require('body-parser')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/gallery')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {

        console.log(req.file.filename);
        let img = new gallery({
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

 router.get('/img', async(req, res) => {
  const imData = await gallery.find({ })
  const img = [];
  for(let i=0;i<imData.length;i++) {
    img.push( {_id:imData[i]._id,filename:imData[i].file.filename} )
  }

  res.send(img)
});

router.put('/delete/:id',async(req,res)=>{
  const data = await gallery.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;