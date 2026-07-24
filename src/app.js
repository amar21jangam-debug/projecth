import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(cors({
    origin : process.env.cors_origin,
    credentials : true , 

})); 


app.use(express.json({limit : "10kb"}));
app.use(express.urlencoded({extended : true , limit : "10kb"}));
app.use(express.static("hitlic/public"));
app.use(cookieParser());


//ROUTES IMPORT 

import userRouter from "./routes/user.routes.js"

//declaration
app.use("/api/v1/users",userRouter)

export default app

// url hit -> what to redirect -> (req,res)->res.send(xyz)
//to check if you are authorized to access the url or not -> middleware -> next() -> controller -> res.send(xyz)
// /url ->middleware checking -> redirect to controller -> res.send(xyz) -> middleware checking -> next() -> controller -> res.send(xyz)
// (err,req,res,next)
//next => middleware -> controller -> res.send(xyz) -> middleware checking -> next() -> controller -> res.send(xyz) -> (err,req,res,next)
// after respond is sent to the client, the middleware will not be executed. The middleware will only be executed if the controller calls next() or if there is an error that is passed to the next() function.