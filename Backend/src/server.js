import express from "express";
import { ENV } from "./lib/env.js";
// import { fileURLToPath } from "url";
import path from "path";
import { connectDB } from "./lib/db.js";
import cors from "cors";
import{serve} from "inngest/express"
import { functions, inngest } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();

//middlewares
app.use(express.json());
// app.use(cors()) // leave as it is in development
// Credentials:true => SERVER allow a browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL, credentials:true})) // for production

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions,
  })
);


app.get("/", (req, res) => {
  res.send("server running");
});
app.get("/interview", (req, res) => {
  res.send("server running");
});
app.get("/books", (req, res) => {
  res.send("server running");
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
// app.listen(ENV.PORT, ()=>{
//     console.log("port is listening");
//     connectDB();
// })

const startserver = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("port is listening");
    });
  } catch (error) {
    console.error("error is starting server ", error)
  }
};
startserver();