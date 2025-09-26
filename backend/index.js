import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

let app = express();

app.listen("3001", () => {
  console.log("Server is running on 3001");
});
