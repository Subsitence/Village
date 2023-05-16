const express = require("express");
const authRouter = express.Router();
const { auth } = require("../middlewares/authMiddleware.js");
const authController = require("../controllers/authController.js");

authRouter.post("/login", authController.login);

authRouter.post("/signup", authController.signup);

authRouter.post("/logout", auth, authController.logout);

module.exports = authRouter;
