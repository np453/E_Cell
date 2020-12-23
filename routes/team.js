const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const team = require("../model/team")
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
        let fullpath = req.file.path;
        let imgData  = fs.readFileSync(fullpath).toString('base64')
        let work = new team({
            category:req.body.category,
            name:req.body.name,
            email:req.body.email,
            designation:req.body.designation,
            facebook:req.body.facebook,
            linkedin:req.body.linkedin,
            instagram:req.body.instagram,
            file : {
                data : Buffer.from(imgData, 'base64'),
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

router.get('/', async(req, res) => {
  const allWorks = await team.find({ })
  const works = [];
  for(let i=0;i<allWorks.length;i++) {
    works.push( {category:allWorks[i].category,name:allWorks[i].name,email:allWorks[i].email,designation:allWorks[i].designation,
        facebook:allWorks[i].facebook,linkedin:allWorks[i].linkedin,instagram:allWorks[i].instagram,
         buffer:Buffer.from(allWorks[i].file.data.buffer, 'base64').toString('base64'), contentType:allWorks[i].file.contentType} )
  }
  res.send(works)
    
 });


module.exports = router;