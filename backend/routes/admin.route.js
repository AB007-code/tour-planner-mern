import express from "express";
import { addProducts, getproduct } from "../controller/product.controller.js";

let route = express.Router();

route.post("/setproduct", addProducts);
route.get("/getproducts", getproduct);

export default route;
