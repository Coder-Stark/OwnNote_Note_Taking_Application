const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config()

const connect =()=>{
    //.env=> MONGO = mongodb+srv://shivamkumar:nobitalovesizuka@cluster0.ailmmey.mongodb.net/inotebook?retryWrites=true&w=majority
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        throw err;
    })
}

module.exports = connect;



