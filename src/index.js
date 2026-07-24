//require("dotenv").config({path: "./temp/.env"});
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";
import app from "./app.js"

dotenv.config({path: "./temp/.env"});



connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("Error in connecting to DB:",error.message);
});






/*


import express from "express"
const app = express()

;( async () => { 
    try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error",() => {
            console.log("Err:",error);
            throw error;
         })

         app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
         })

    } catch (error) {
        console.log(`Error: ${error.message}`)
        throw error
    } 
})()

*/