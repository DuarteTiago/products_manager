import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { productsController } from "./controllers/productsController";
import { authController } from "./controllers/authController";
import { ensureAuth } from "./middlewares/auth";
import { favoritesController } from "./controllers/favoritesController";
import { usersController } from "./controllers/usersController";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", categoriesController.index);
router.get("/categories/:id", categoriesController.show);

router.get("/products", productsController.index);
router.get("/products/newest", productsController.newest);
router.get("/products/search", productsController.search);
router.get(
  "/products/auth/:id",
  ensureAuth,
  productsController.showAuthenticated
);
router.get("/products/:id", productsController.show);

router.get("/favorites", ensureAuth, favoritesController.index);
router.post("/favorites", ensureAuth, favoritesController.save);
router.delete("/favorites/:id", ensureAuth, favoritesController.delete);

router.get("/users/current", ensureAuth, usersController.show);
router.put("/users/current", ensureAuth, usersController.update);
router.put(
  "/users/current/password",
  ensureAuth,
  usersController.updatePassword
);

export { router };
