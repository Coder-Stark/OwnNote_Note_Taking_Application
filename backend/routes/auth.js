const express = require('express');
const User = require('../models/User');
const router = express.Router();

//create a user using : POST "/api/auth/" , doesn't require auth
router.post('/',(req,res)=>{
    // obj = {
    //     a: 'anything',
    //     number: 323
    // }
    // res.json(obj)

    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);

})

module.exports = router;