import express from "express";
import dotenv from "dotenv";
import { ConnectToMongo } from "./config/connect.db.js";
import authRouter from "./routes/auth.routes.js";
import { ErrorHandler } from "./middlewares/ErrorHandler.js";
import TodosRouter from "./routes/todos.routes.js";

const app = express();
dotenv.config();
ConnectToMongo();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", authRouter);
app.use("/api/v1/", TodosRouter);

app.use(ErrorHandler);
app.listen(process.env.PORT, console.log("Server is Listening !"));
