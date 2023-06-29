import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { favoriteService } from "../services/favoriteService";

export const favoritesController = {
  // GET /favorites
  index: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;

    try {
      const favorites = await favoriteService.findByUserId(userId);
      return res.json(favorites);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // POST /favorites
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { productId } = req.body;
    try {
      const favorite = await favoriteService.create(userId, Number(productId));
      return res.status(201).json(favorite);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // DELETE /favorite/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const productId = req.params.id;

    try {
      await favoriteService.delete(userId, Number(productId));
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
