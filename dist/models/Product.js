"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
exports.Product = database_1.sequelize.define("Product", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    ownerName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT,
    },
    productPrice: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    productImage: {
        type: sequelize_1.DataTypes.STRING,
    },
    productCode: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.INTEGER,
    },
    categoryId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: "categories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
    },
});
