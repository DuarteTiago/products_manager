// src/database/seeders/XXXXXXXXXXXXXX-seed-categories-table.js

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Feminino",

          description: "Roupas femininas",
          position: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Masculino",

          description: "Roupas Masculinas",
          position: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "infantil",

          description: "Roupas femininas",
          position: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Praia",
          description: "Roupas de praia",
          position: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "inverno",
          description: "Roupas de inverno",
          position: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
