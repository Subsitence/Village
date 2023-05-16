const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const fs = require("fs");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username: username },
  });

  if (!user) {
    res.status(401).json({
      message: "Your username is incorrect!",
    });
  } else {
    let match = await bcrypt.compare(password, user.dataValues.password);
    if (match) {
      const privateKey = fs.readFileSync("private-key.pem", "utf8");
      const signOptions = {
        algorithm: "RS256",
      };

      const accessToken = jwt.sign(
        JSON.stringify({
          ...user.dataValues,
          password: "********",
          id: "***",
        }),
        privateKey,
        signOptions
      );

      res.status(200).json({
        message: "Login Sucess",
        access_token: accessToken,
      });
    } else {
      res.status(401).json({
        message: "Your password is incorrect!",
      });
    }
  }
};

exports.signup = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hash(password, salt);

    await User.create({
      name: name,
      username: username,
      password: hash,
    });

    res.status(200).json({
      message: "User created",
    });
  } catch (err) {
    res.status(400).json({
      message: "Username has been already taken!",
    });
  }
};

exports.logout = async (req, res) => {
  res.json({
    message: "logout sucess",
  });
};
