// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: '.env'
})

connectDB()
.then(() => {
    const PORT = process.env.PORT || 8000;
    app.on("error", (err)=>{
        console.log("error: ", err)
        throw err
    })
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
 
.catch(err => {
    console.log("Mongo db conneciton failed !!!", err)
})





/*
const app = express()
import { express } from "express";
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("err:",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})() 
*/