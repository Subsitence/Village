const express = require("express");
const authRouter = express.Router();
const User = require("../models/userModel.js");
const auth = require("../middlewares/auth.js");

authRouter.post("/login", auth.login, async (req, res) => {
  res.status(200).json("success");
});

authRouter.post("/signup", async (req, res) => {
  let payload = req.body;
  let result;
  try {
    result = await User.insertUser(payload);
  } catch (err) {
    res.status(400).json({
      message: "username already exists",
    });
  }
  res.status(200).json({
    message: "Success",
  });
});

module.exports = authRouter;
