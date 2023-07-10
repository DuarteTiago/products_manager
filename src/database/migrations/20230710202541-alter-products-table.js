"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "products",
          "product_code",
          {
            allowNull: false,
            unique: true,
            type: Sequelize.DataTypes.STRING,
            after: "product_image",
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("products", "product_code", {
          transaction: t,
        }),
      ]);
    });
  },
};
