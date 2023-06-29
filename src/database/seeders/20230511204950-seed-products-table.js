"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query(
      "SELECT id FROM categories;"
    );

    await queryInterface.bulkInsert("products", [
      {
        name: "calça",
        owner_name: "João",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        product_price: "30,40",
        product_code: 780,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "moletom",
        owner_name: "Luiz",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        product_price: "29,50",
        product_code: 781,
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
