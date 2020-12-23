const router = require('express').Router();
const works = require('../model/whatwedo');

router.get('/', (req, res) => {
    User.find({ }).then(data => res.json(data))
})



router.post('/', async(req, res) => {
    const Works = new works({
        title:req.body.title,
        description:req.body.description,
        highlightedtext:req.body.highlightedtext
    })
    const savedwork= await Works.save();
    res.send("uploaded")
})
    


module.exports = router;