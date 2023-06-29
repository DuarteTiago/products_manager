import { Category } from "./Category";
import { Product } from "./Product";
import { Favorite } from "./Favorite";
import { User } from "./Users";

//category has several products
Category.hasMany(Product, { as: "products" });

//product belongs to a category
Product.belongsTo(Category);
//product belongs to many users
Product.belongsToMany(User, { through: Favorite });
//product has many favorites
Product.hasMany(Favorite, { as: "FavoritesUsers", foreignKey: "product_id" });

//favorite belongs to a product
Favorite.belongsTo(Product);
//favorite belongs to a user
Favorite.belongsTo(User);

// user belongs to many products
User.belongsToMany(Product, { through: Favorite });
//user has many favorites
User.hasMany(Favorite, { as: "FavoritesProducts", foreignKey: "user_id" });

export { Category, Product, Favorite, User };
