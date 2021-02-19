import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_ID, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ----------------rotues

import User from "./models/user.model.js";

app.post("/account", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json(err);
    return res.status(200).json({
      success: true,
    });
  });
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSucess: false,
        message: "Email or password not correct.",
      });
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSucess: false,
          message: "Email or password not dfcorrect.",
        });
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSucess: true, userId: user._id });
      });
    });
  });
});

app.get("/logout", (req, res) => {
  User.findOneAndUpdate(
    { email: req.body.email },
    { token: "" },
    (err, user) => {
      if (err) return res.josn(err);
      return res.status(200).send({ success: true });
    }
  );
});

// ----------------------------------

app.get("/create", (req, res) => {
  res.send("헤으응");
});

// --------------------------

app.listen(PORT, () => {
  console.log("server is running");
});
