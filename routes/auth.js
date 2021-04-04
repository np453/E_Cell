const router = require('express').Router();
const User = require('../model/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Post route for admin login
router.post('/', async (req, res) => {
    //checking email
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send("Email doesn't exists");

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //create and assign a token
    // const token = jwt.sign({_id:user._id}, process.env.TOKEN_SECRET);
    res.send(user._id);
    
});

// register route for admin register
router.post('/register', async(req, res) => {
    //checking if a user already exists in the database
    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.send('Email already exists');
    
    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //create a new user
    const user = new User({
        email:req.body.email,
        password:hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err) {
        res.status(400).send(err);
    }
});
module.exports = router;