import mongoose from "mongoose";
 const  connectMongoDb=async ()=>{
   try {
        const url=process.env.MONGODB_URL;
        await mongoose.connect(url);
        console.log("connected to MongoDB");
   } catch (error) {
       console.log(error) 
   }
}
export  {connectMongoDb}
