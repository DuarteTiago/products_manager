import { Request, Response } from "express";
import { productService } from "../services/productService";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { Product } from "../models";
import { favoriteService } from "../services/favoriteService";
import { AuthenticatedRequest } from "../middlewares/auth";

export const productsController = {
  //GET/products/newest

  newest: async (req: Request, res: Response) => {
    try {
      const newestProducts = await productService.getTopNewest();
      return res.json(newestProducts);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET / products/search?name=
  search: async (req: Request, res: Response) => {
    const { name } = req.query;
    const [page, perPage] = getPaginationParams(req.query);
    try {
      if (typeof name !== "string")
        throw new Error("name param must be of type string");
      const products = await productService.findByName(name, page, perPage);
      return res.json(products);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET/products
  index: async (req: Request, res: Response) => {
    const products = await Product.findAll();
    return res.json(products);
  },

    // GET/products/:id
    show: async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const product = await productService.findByIdWithProducts(id);
        return res.json(product);
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    },

  // GET/products/:id
  showAuthenticated: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.id;
    const productId = req.params.id;
    try {
      const product = await productService.findByIdWithProducts(productId);
      if (!product)
        return res.status(404).json({ message: "Produto não encontrado" });

      const favorited = await favoriteService.isFavorited(
        Number(userId),
        Number(productId)
      );

      return res.json({ ...product.get(), favorited });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
