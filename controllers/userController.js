const User = require("../models/userModel.js");

exports.getUser = async (req, res) => {
  const { username } = req.user;
  let user = await User.findOne({ where: { username: username } });
  res.json({
    id: user.id,
    name: user.name,
    username: user.username,
  });
};
