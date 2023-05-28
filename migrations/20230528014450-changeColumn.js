"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      "Users",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal("uuid_generate_v4()"),
          allowNull: false,
          primaryKey: true,
        },

        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },

        password: {
          type: Sequelize.STRING,
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Users");
  },
};
