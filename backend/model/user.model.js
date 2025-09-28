import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    kind: "regexp",
    path: "email",
    match: /^[a-z0-9]+@gmail\.com$/,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    path: "phone",
    unique: true,
    // min: [10, "Must be Valid Number"],
    maxlength: [10, "Must be Valid Number"],
    required: true,
  },
  password: {
    type: String,
    path: "password",
    required: true,
  },
});

export default mongoose.model("User", userSchema);
