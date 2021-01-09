const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const Works = require('../model/whatwedo');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/public/media/works')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
    
        let work = new Works({
            title:req.body.title,
            description:req.body.description,
            file : {
              filename:req.file.filename
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