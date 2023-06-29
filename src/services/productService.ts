import { Op } from "sequelize";
import { Product } from "../models";

export const productService = {
  findByIdWithProducts: async (id: string) => {
    const withProducts = await Product.findByPk(id, {
      attributes: [
        "id",
        "name",
        "description",
        ["product_price", "productPrice"],
        ["product_image", "productImage"],
        ["product_code", "productCode"],
      ],
    });
    return withProducts;
  },

  getTopNewest: async () => {
    const products = await Product.findAll({
      limit: 10,
      order: [["created_at", "DESC"]],
    });
    return products;
  },
  findByName: async (name: string, page: number, perPage: number) => {
    const offset = (page - 1) * perPage;
    const { count, rows } = await Product.findAndCountAll({
      attributes: [
        "id",
        "name",
        "description",
        ["product_price", "productPrice"],
        ["product_image", "productImage"],
        ["product_code", "productCode"],
      ],
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: perPage,
      offset,
    });
    return {
      products: rows,
      page,
      perPage,
      total: count,
    };
  },
};
