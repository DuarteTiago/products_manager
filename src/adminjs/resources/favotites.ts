import { ResourceOptions } from "adminjs";
export const favoriteResourceOptions: ResourceOptions = {
  navigation: "Favoritos",
  editProperties: ["userId", "productId"],
  filterProperties: ["userId", "productId", "createdAt", "updatedAt"],
  listProperties: ["userId", "productId", "createdAt", "updatedAt"],
  showProperties: ["userId", "productId", "createdAt", "updatedAt"],
};
