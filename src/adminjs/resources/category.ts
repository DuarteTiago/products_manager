import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: ["name", "description", "position"],
  filterProperties: [
    "name",
    "description",
    "position",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "description"],
  showProperties: ["id", "name", "description", "createdAt", "updatedAt"],
};
