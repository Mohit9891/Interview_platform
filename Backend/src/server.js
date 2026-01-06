import express from "express"
import { ENV } from "./lib/env.js";
// import { fileURLToPath } from "url";
import path from "path";


const app = express();

const __dirname = path.resolve()


app.get("/" , (req,res)=>{
    res.send("server running");
})
app.get("/interview" , (req,res)=>{
    res.send("server running");
})
app.get("/books" , (req,res)=>{
    res.send("server running");
})

if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/{*any}", (req,res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}
app.listen(ENV.PORT, ()=>{
    console.log("port is listening")
})