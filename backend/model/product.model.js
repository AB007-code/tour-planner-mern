import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
  // Schema method is used to make a new structure what data we need to store
  title: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxGroupSize: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  reviews: {
    type: Array,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Product", prodSchema); // model method takes two parameters. first will help to create a object in mongodb collection as document and second is used to save the schema
