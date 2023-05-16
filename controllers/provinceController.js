const Province = require("../models/provinceModel.js");
const { Sequelize } = require("sequelize");

exports.get = async (req, res) => {
  const { lng, lat } = req.query;
  const province = await Province.findOne({
    where: Sequelize.fn(
      "st_contains",
      Sequelize.col("geometry"),
      Sequelize.fn("st_geomFromText", `POINT(${lng} ${lat})`, 4326)
    ),
  });

  if (!province)
    return res.status(200).json({ message: "Province not found!" });

  res.status(200).json(province);
};
