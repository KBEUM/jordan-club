import express from "express";
import { createUser, loginUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.post("/create", createUser);

userRouter.post("/login", loginUser);

export default userRouter;
