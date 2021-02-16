import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_ID, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", userRouter);

app.listen(PORT, () => {
  console.log("server is running");
});
