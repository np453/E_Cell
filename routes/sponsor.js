const router = require('express').Router();
const mongoose = require('mongoose')
const multer = require('multer')
const fs = require('fs');
const bp = require('body-parser');
const sponsor = require('../model/sponsor');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/sponsor')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        
        let company = new sponsor({
            
            name:req.body.name,
            sponsorlink:req.body.sponsorlink,
            file : {
              filename:req.file.filename
            }
        })
        const savedcompany = await company.save()
        res.send(savedcompany)
        
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          } 
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allcompanies = await sponsor.find({ })
  const companies = [];
  for(let i=0;i<allcompanies.length;i++) {
    companies.push( {_id:allcompanies[i]._id,route:"sponsor",name:allcompanies[i].name,sponsorlink:allcompanies[i].sponsorlink,filename:allcompanies[i].file.filename} )
  }
  res.send(companies)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await sponsor.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})


module.exports = router;