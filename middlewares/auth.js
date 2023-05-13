const User = require("../models/userModel.js");

exports.login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let data = await User.getByUserName(username);
  if (data && data[0]["password"] === password) next();
  else {
    res.status(400).json("login failed");
  }
};
