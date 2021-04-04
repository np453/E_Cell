const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const workshop = require("../model/workshop")
const bp = require('body-parser')

//multer for image storage in public folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/workshop')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
  
const upload = multer({ storage: storage }).single('file')


//post request for sending workshop img
router.post('/', upload , async(req, res) => {

        console.log(req.file.filename);
        let img = new workshop({
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

//get request for workshop img
 router.get('/img', async(req, res) => {
  const imData = await workshop.find({ })
  const img = [];
  for(let i=0;i<imData.length;i++) {
    img.push( {_id:imData[i]._id,route:"workshop",filename:imData[i].file.filename} )
  }

  res.send(img)
});

// delete request for workshop api using mongo object id
router.put('/delete/:id',async(req,res)=>{
  const data = await workshop.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;