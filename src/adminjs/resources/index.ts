import { ResourceWithOptions } from "adminjs";
import { Category, Favorite, Product, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { productResourceOptions, productResourcesFeatures } from "./product";
import { userResourceOptions } from "./user";
import { favoriteResourceOptions } from "./favotites";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Favorite,
    options: favoriteResourceOptions,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Product,
    options: productResourceOptions,
    features: productResourcesFeatures,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
];
