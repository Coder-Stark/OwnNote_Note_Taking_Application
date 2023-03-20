const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()

const connect =()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        throw err;
    })
}

module.exports = connect;
