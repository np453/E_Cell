const router = require('express').Router();
const mail = require('../model/email');
const { route } = require('./auth');

//post route for email subscription
// Pre initialized mongo document required

router.post('/' , async(req,res)=>{
    const data=await mail.find({});
    console.log(req.body)
    mail.findByIdAndUpdate({_id:data[0]._id},  //Pushing each email element in the array
        { $push: {
                emails:{
                    "email":req.body.email,
                }
            }
        }).exec()

    res.send(data)
})


// get route for email data
router.get('/', async(req, res) => {
const allcontacts = await mail.find({ })
const contacts = [];
for(let i=0;i<allcontacts.length;i++) {
contacts.push( {email:allcontacts[i].email} )
}
res.send(contacts)

});

module.exports = router;