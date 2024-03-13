import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();
const db= process.env.MONGO;
console.log(db)

mongoose.connect(db).then(()=>{
    console.log("connection done")
}).catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Server running on port 3000!");
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
