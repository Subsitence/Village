"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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
      modelName: "Province",
      timestamps: false,
    }
  );
  return Province;
};
