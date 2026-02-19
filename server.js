import app from "./src/app.js";
import connectDB from "./src/config/db.js";

connectDB()

app.listen(9000, ()=>{
    console.log("Server is Running UP...")
})