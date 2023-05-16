const express = require("express");
const userRouter = express.Router();
const { auth } = require("../middlewares/authMiddleware.js");
const userController = require("../controllers/userController.js");

userRouter.get("/me", auth, userController.getUser);

module.exports = userRouter;
