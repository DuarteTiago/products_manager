import { Favorite } from "../models";

export const favoriteService = {
  findByUserId: async (userId: number) => {
    const favorites = await Favorite.findAll({
      attributes: [["user_id", "userId"]],
      where: { userId },
      include: {
        association: "Product",
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
    return {
      userId,
      products: favorites.map((favorite) => favorite.Product),
    };
  },

  create: async (userId: number, productId: number) => {
    const favorite = Favorite.create({
      productId,
      userId,
    });
    return favorite;
  },
  delete: async (userId: number, productId: number) => {
    await Favorite.destroy({
      where: {
        userId,
        productId,
      },
    });
  },
  isFavorited: async (userId: number, productId: number) => {
    const favorite = await Favorite.findOne({
      where: {
        userId,
        productId,
      },
    });
    return favorite !== null;
  },
};
