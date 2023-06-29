"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Favorite = exports.Product = exports.Category = void 0;
const Category_1 = require("./Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return Category_1.Category; } });
const Product_1 = require("./Product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return Product_1.Product; } });
const Favorite_1 = require("./Favorite");
Object.defineProperty(exports, "Favorite", { enumerable: true, get: function () { return Favorite_1.Favorite; } });
const Users_1 = require("./Users");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return Users_1.User; } });
//category has several products
Category_1.Category.hasMany(Product_1.Product, { as: "products" });
//product belongs to a category
Product_1.Product.belongsTo(Category_1.Category);
//product belongs to many users
Product_1.Product.belongsToMany(Users_1.User, { through: Favorite_1.Favorite });
//product has many favorites
Product_1.Product.hasMany(Favorite_1.Favorite, { as: "FavoritesUsers", foreignKey: "product_id" });
//favorite belongs to a product
Favorite_1.Favorite.belongsTo(Product_1.Product);
//favorite belongs to a user
Favorite_1.Favorite.belongsTo(Users_1.User);
// user belongs to many products
Users_1.User.belongsToMany(Product_1.Product, { through: Favorite_1.Favorite });
//user has many favorites
Users_1.User.hasMany(Favorite_1.Favorite, { as: "FavoritesProducts", foreignKey: "user_id" });
