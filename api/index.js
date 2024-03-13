import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();
const db= process.env.MONGO;
console.log(db)

mongoose.connect(db).then(()=>{
    console.log("connection done")
}).catch((err)=>{
    console.log(err)
})

const app = express();
app.listen(3000, ()=>{
    console.log("Server running on port 3000!");
})