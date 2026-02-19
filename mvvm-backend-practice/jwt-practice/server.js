import express from "express";
import { Mongoose } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.listen(console.log(`server running on port: ${process.env.PORT}`));
