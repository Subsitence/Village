const Sequelize = require("sequelize");
const configs = require("../configs/default.js");

const connecToPostgres = async () => {
  const sequelize = new Sequelize(configs.postgres.options);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully!");
    return sequelize;
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
};

module.exports = connecToPostgres;
