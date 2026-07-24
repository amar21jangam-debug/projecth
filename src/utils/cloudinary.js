import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

import { v2 as cloudinary } from 'cloudinary';
import { response } from "express";

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:CLOUDINARY_API_SECRET
    });


    const uploadOnCloudinary = async (localfilepath) => {
         try {
            if (!localfilepath) return null
            //upload the file on cloudinary
         const  response = await cloudinary.uploader.upload(localfilepath,{
                resource_type : "auto"
            })
            //file has been uplloaded sucecsfully
            console.log("file is uplaoded on cloudinary",
                response.url
            );
            return response ;
         } catch (error) {
            fs.unlinkSync(localfilepath)// remove the locally saved temporary file as the upload operation got foailed 
            return null;


         }
    }
export {uploadOnCloudinary}

    cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
           {
               public_id: 'shoes',
           },
       function(error,result) {console.log(result);});


       