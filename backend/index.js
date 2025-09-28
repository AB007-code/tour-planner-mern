import express from "express";
import dotenv from "dotenv";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import route from "./routes/admin.route.js";
import userRoute from "./routes/user.route.js";
// import schema from "./model/product.model.js";
// console.log(schema);

dotenv.config();
let app = express();
app.use(bodyParser.json()); // body-parser is used to parse the requested data into chunk when we use express and it will parser the data in the middleware.

app.use(route, (req, res, next) =>
  console.log("Data proccessed successfully", next())
);
app.use(userRoute, () => console.log("User registered successfully"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
});
mongoose
  .connect(process.env.MONGODB_URL, console.log("MongoDB Connected"))
  .then(
    app.listen("8080", () => {
      console.log("Server is running on 8080");
    })
  )
  .catch((err) => {
    console.log(err.message);
  }); // I have connected server with mongoDB using connect method which is inbuilt function, it is inside the mongoose package/object
