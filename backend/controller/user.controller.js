import express from "express";
import User from "../model/user.model.js";
import bodyParser from "body-parser";

express().use(bodyParser.json());

export let userData = (req, res) => {
  console.log(User);
  try {
    let { name, email, phone, password } = req.body;
    // console.log(req.body);
    let userData = new User({
      name,
      email,
      phone,
      password,
    });
    userData.save();
    console.log(userData);
    res.send("User Data store successfully in db");
  } catch (err) {
    res.send(err);
  }
};
