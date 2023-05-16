const configs = require("../configs/default.js");
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(configs.postgres.options);

class User extends Model {
  otherPublicField;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.literal("uuid_generate_v4()"),
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    created_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },

    updated_at: {
      type: "TIMESTAMP",
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["username"], // Whatever other field you need to make unique
      },
    ],
  }
);

(async () => {
  await sequelize.sync();
  console.log("Sync model successfully");
})();

module.exports = User;
