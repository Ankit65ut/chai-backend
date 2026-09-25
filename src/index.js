import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import dotenv from "dotenv";
import connectDB from './db/index.js';
dotenv.config(
    {
        path: './.env'
    }
)

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`sever is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongo db connection failed ",error);
})



/*
import express from "express";
const app = express();
;(async () => {
    try{
       await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
       app.on("error", () => {
        console.log("error occurred",error);
        throw error

       })

       app.listen(process.env.PORT,()=>{
        console.log('app is listening on port $ {process.env.PORT}');
       })

    }
    catch (error){
        console.error("ERROR:",error)
        throw error
    }
})()
    */