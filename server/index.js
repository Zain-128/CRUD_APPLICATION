import express from "express";
import dotenv from "dotenv";
import { ConnectToMongo } from "./config/connect.db.js";
import authRouter from "./routes/auth.routes.js";
import { ErrorHandler } from "./middlewares/ErrorHandler.js";

dotenv.config();

ConnectToMongo();
const app = express();

app.use("/api/v1/", authRouter);

app.use(ErrorHandler);
app.listen(process.env.PORT, console.log("Server is Listening !"));
