// require('dotenv').config( {path: './.env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config( {path: './.env'});
connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`app is listning on >>>>>>>>>${process.env.PORT}`)
})})
.catch((error)=>{
    console.log("mongo connect fail>>>>>>>> :  ",error);
})




// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("ERRORRR",(error)=>{
//         console.log("eeerrr  : ",error); 
//         throw error;
//          })
//          app.listen(process.env.PORT,()=>{  
//             console.log(`app is listning on ${process.env.PORT}`);
            
//          })
//     } catch (error) {
//         console.error("ERROR : ", error)
//         throw  error("");
        
//     }
// })()