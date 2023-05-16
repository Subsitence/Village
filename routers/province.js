const express = require("express");
const provinceRouter = express.Router();
const { auth } = require("../middlewares/authMiddleware.js");
const provinceController = require("../controllers/provinceController.js");

provinceRouter.get("/province", auth, provinceController.get);

module.exports = provinceRouter;
