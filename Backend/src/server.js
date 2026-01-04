import express from "express"
import { ENV } from "./lib/env.js";


const app = express();

app.get("/" , (req,res)=>{
    res.send("server running");
})
app.listen(ENV.PORT, ()=>{
    console.log("port is listening")
})