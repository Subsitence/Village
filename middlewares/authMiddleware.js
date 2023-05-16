const jwt = require("jsonwebtoken");
const fs = require("fs");

exports.auth = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  const publicKey = fs.readFileSync("public-key.pem", "utf8");
  const verifyOptions = {
    algorithm: ["RS256"],
  };

  jwt.verify(token, publicKey, verifyOptions, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
