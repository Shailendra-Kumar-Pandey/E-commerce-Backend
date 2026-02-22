import mongoose from "mongoose";

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((response)=>{
        console.log("mongoDB Connected...")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDB;