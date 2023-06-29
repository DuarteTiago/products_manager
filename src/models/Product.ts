import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from "../database";

export interface Product {
  id: number;
  name: string;
  ownerName: string;
  description: string;
  productPrice: string;
  productImage: string;
  productCode: number;
  categoryId: number;
}

export interface ProductCreationAttributes
  extends Optional<Product, "id" | "productImage"> {}
export interface ProductInstance
  extends Model<Product, ProductCreationAttributes>,
    Product {}

export const Product = sequelize.define<ProductInstance, Product>("Product", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  ownerName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  productPrice: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  productImage: {
    type: DataTypes.STRING,
  },
  productCode: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "categories", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
});
