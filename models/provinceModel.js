const configs = require("../configs/default.js");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(configs.postgres.options);

class Province extends Model {
  otherPublicField;
}

Province.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    geometry: {
      type: DataTypes.GEOMETRY,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "provinces",
    timestamps: false,
  }
);

(async () => {
  await sequelize.sync();
  console.log("Sync model successfully");
})();

module.exports = Province;
