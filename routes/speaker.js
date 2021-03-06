const router = require('express').Router();
const multer = require('multer')
const speaker = require('../model/speaker');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'media/speaker')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
  
const upload = multer({ storage: storage }).single('file')

router.post('/', upload , async(req, res) => {
        
        let person = new speaker({
            
            name:req.body.name,
            title:req.body.title,
            intro:req.body.intro,
            description:req.body.description,
            file : {
                filename:req.file.filename
            }
        })
        const savedperson = await person.save()
        res.send(savedperson)
        
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          } 
          
          return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
  const allspeakers = await speaker.find({ })
  const people = [];
  for(let i=0;i<allspeakers.length;i++) {
    people.push( {_id:allspeakers[i]._id,route:"speaker",name:allspeakers[i].name,title:allspeakers[i].title,intro:allspeakers[i].intro,description:allspeakers[i].description,filename:allspeakers[i].file.filename} )
  }
  res.send(people)
    
 });
 router.put('/delete/:id',async(req,res)=>{
  const data = await speaker.findByIdAndRemove({_id:req.params.id}, console.log("deleted") )
  res.send(data);

})


module.exports = router;