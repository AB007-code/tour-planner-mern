import express from "express";
import bodyParser from "body-parser";
import { userData } from "../controller/user.controller.js";

let userRoute = express.Router();
userRoute.post("/register", userData);
express().use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
});
export default userRoute;
