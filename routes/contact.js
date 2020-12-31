const router = require('express').Router();
const email = require('../model/email');


router.post('/', async(req, res) => {
    
    let contact = new email({
        email:req.body.email,
        
    })
    const savedcontact = await contact.save()
    res.send(savedcontact)
      
      return res.status(200).send(req.file)
});

router.get('/', async(req, res) => {
const allcontacts = await email.find({ })
const contacts = [];
for(let i=0;i<allcontacts.length;i++) {
contacts.push( {email:allcontacts[i].email} )
}
res.send(contacts)

});

module.exports = router;