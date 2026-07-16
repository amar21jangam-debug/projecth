import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(` \n MongoDB connected: ${connection.connection.host}`);
    } catch (error) {
        console.log("MONDO DB CONNECTION ERROR:", error.message);
        process.exit(1); // process : method in mongo 
    }
}


export default connectDB;