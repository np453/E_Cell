const router = require('express').Router();
const multer = require('multer')
const sets = require('../model/carousel');

// Multer for storing image 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/carousel')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage }).single('file');

// post route for carousel
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


//Get route for carousel
router.get('/', async(req, res) => {
  const allsets = await sets.find({ })
  const Sets = [];
  for(let i=0;i<allsets.length;i++) {
    // element array with mongo object id
    Sets.push( {_id:allsets[i]._id,route:"carousel",cite:allsets[i].cite,description:allsets[i].description,filename:allsets[i].file.filename} )
  }
  // sending array as response 
  res.send(Sets)
    
 });

 //delete route for carousel
 router.put('/delete/:id',async(req,res)=>{
  const data = await sets.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  // sending delete status 
  res.send(data);

})

module.exports = router;