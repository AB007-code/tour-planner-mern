import Product from "../model/product.model.js";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
let app = express();
app.use(bodyParser.json());
export let addProducts = (req, res, next) => {
  let {
    title,
    city,
    address,
    distance,
    price,
    maxGroupSize,
    desc,
    reviews,
    photo,
    featured,
  } = req.body;
  let product = new Product({
    title,
    city,
    address,
    distance,
    price,
    maxGroupSize,
    desc,
    reviews,
    photo,
    featured,
  });
  product.save();
  res.send("Data successfully saved to the db");
};

export let getproduct = async (req, res, next) => {
  console.log(await Product.find());
  res.send(await Product.find());
};
