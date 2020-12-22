const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const gallery = require("../model/gallery")
const bp = require('body-parser')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        console.log(req.file)
        let fullpath = req.file.path;
        let imgData  = fs.readFileSync(fullpath).toString('base64')
        let work = new gallery({
            file : {
                data : Buffer(imgData, 'base64'),
                contentType : req.file.mimetype
            }
        })
        const savedWork = await work.save()
        res.send(savedWork)
        
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
    img.push( {buffer:Buffer.from(imData[i].file.data.buffer, 'base64').toString('base64'), contentType:imData[i].file.contentType} )
  }

  res.send(img)
});

module.exports = router;