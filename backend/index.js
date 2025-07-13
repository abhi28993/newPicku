import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDB.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); 

app.get('/',()=>{
    console.log("Hi")
})

connectDB();
const PORT = 8080; 
app.listen(PORT, ()=>{
    console.log(`Surver is running on ${PORT}`)
})



