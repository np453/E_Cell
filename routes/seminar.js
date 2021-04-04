const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const seminar = require("../model/seminar")
const bp = require('body-parser')

//multer for image storage in public folder
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'media/seminar')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
  
const upload = multer({ storage: storage }).single('file')


//post request for sending seminar img
router.post('/', upload , async(req, res) => {

        console.log(req.file.filename);
        let img = new seminar({
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

//get request for seminar img
 router.get('/img', async(req, res) => {
  const imData = await seminar.find({ })
  const img = [];
  for(let i=0;i<imData.length;i++) {
    img.push( {_id:imData[i]._id,route:"seminar",filename:imData[i].file.filename} )
  }

  res.send(img)
});

// delete request for seminar api using mongo object id
router.put('/delete/:id',async(req,res)=>{
  const data = await seminar.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})

module.exports = router;