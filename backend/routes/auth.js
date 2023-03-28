const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "ShivamKumarStark@2529";

//Route1 - create a user using : POST "localhost:5000/api/auth/createuser" , No login required / doesn't require auth
router.post('/createuser',[
        body('name','Enter a valid name').isLength({min:3}),
        body('email','Enter a valid Email').isEmail(),
        body('password','Password must be 5 characters').isLength({ min: 5 })
    ],
    async(req,res)=>{
    
    //if there are errors , return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try{
        //check whether the user with this email exists already
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"})
        }
        
        const salt = await bcrypt.genSalt(10);
        secPass = await bcrypt.hash(req.body.password,salt);
        //create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        // res.json({user})
        res.json({authtoken});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Rout2- Authenticate a user using : POST "localhost:5000/api/auth/login" , No login required / doesn't require auth
router.post('/login',[
    body('email','Enter a valid Email').isEmail(),
    body('password','Password cannot be blank').exists(),
],
async(req,res)=>{
    let success = false;
    //if there are errors , return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({success, error: "Please try to login with correct credentials"});
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authtoken});
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Rout3- Get loggedIn user detail using : POST "localhost:5000/api/auth/getuser" , login required /  require auth
router.post('/getuser', fetchuser , async(req,res)=>{
try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

module.exports = router;