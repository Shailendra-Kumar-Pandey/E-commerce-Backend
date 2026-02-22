import dotenv from "dotenv";            // this file use one time but on top in Server FIle 
// import "dotenv/config"; 
dotenv.config()
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB()

let Port = process.env.Port

app.listen(Port, ()=>{
    console.log("Server is Running UP...")
})