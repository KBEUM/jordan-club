import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  "mongodb+srv://Bom:26412300@bom.o8efy.mongodb.net/jordan?retryWrites=true&w=majority";
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/account", userRouter);

app.get("/", (req, res) => {
  res.send("deploy test! why!!!");
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on Port : ${PORT}`))
  )
  .catch((err) => console.log(err));
