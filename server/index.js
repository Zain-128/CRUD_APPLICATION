import express from "express";
import dotenv from "dotenv";
import { ConnectToMongo } from "./config/connect.db.js";

dotenv.config();

ConnectToMongo();
const app = express();

app.listen(process.env.PORT, console.log("Server is Listening !"));
