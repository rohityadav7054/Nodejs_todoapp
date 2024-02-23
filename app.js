import Express from "express";
import {config} from "dotenv";
import userRouter from "./routes/route.js";
import cookieParser from "cookie-parser";
import taskRouter from "./routes/taskroute.js";
import { errorMiddleware } from "./Middleware/error.js";
import cors from "cors";
 export const app = Express();
 config({
  path:"./data/config.env" });
//add ,middleware..
app.use(Express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true, // Ensure this is set to true
    methods: 'GET, PUT, POST, DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  })
);
// Using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/",(req,res)=>{
  res.send("Nice Working..");
});

//Using error middleware  
app.use(errorMiddleware);
