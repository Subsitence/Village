const express = require("express");
const router = express.Router();
const authRouter = require("./auth.js");

router.use("/api/v1", authRouter);

module.exports = router;
