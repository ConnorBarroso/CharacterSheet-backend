import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app = express()
dotenv.config()
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error', (error)=> console.error(error))
db.once('open',() => console.log("db connected"))


app.listen(process.env.LOCAL_PORT, ()=> console.log('server started'))

