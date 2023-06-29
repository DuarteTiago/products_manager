import { Category } from "../models";

export const categoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage;

    const { count, rows } = await Category.findAndCountAll({
      attributes: ["id", "name", "position"],
      order: [["position", "ASC"]],
      limit: perPage,
      offset,
    });

    return {
      categories: rows,
      page,
      perPage,
      total: count,
    };
  },

  findByIdWithProducts: async (id: string) => {
    const categoryWithProducts = await Category.findByPk(id, {
      attributes: ["id", "name"],
      include: {
        association: "products",
        attributes: [
          "id",
          "name",
          "description",
          ["product_price", "productPrice"],
          ["product_image", "productImage"],
          ["product_code", "productCode"],
        ],
      },
    });
    return categoryWithProducts;
  },
};
