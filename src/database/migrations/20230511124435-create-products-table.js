"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      owner_name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT,
      },
      product_price: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      product_image: {
        type: Sequelize.DataTypes.STRING,
      },
      product_code: {
        allowNull: false,
        unique: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      category_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "categories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
