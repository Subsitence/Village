const express = require("express");
const router = express.Router();
const authRouter = require("./auth.js");
const userRouter = require("./user.js");
const provinceRouter = require("./province.js");

router.use("/api/v1", authRouter);
router.use("/api/v1", userRouter);
router.use("/api/v1", provinceRouter);

module.exports = router;
