import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const productResourceOptions: ResourceOptions = {
  navigation: "Catálogo",

  editProperties: [
    "name",
    "ownerName",
    "description",
    "productPrice",
    "uploadImage",
    "productCode",
    "categoryId",
  ],
  filterProperties: [
    "name",
    "ownerName",
    "description",
    "productPrice",
    "productCode",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "id",
    "name",
    "ownerName",
    "productPrice",
    "productCode",
    "categoryId",
  ],
  showProperties: [
    "id",
    "name",
    "ownerName",
    "description",
    "productPrice",
    "productImage",
    "productCode",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
};

export const productResourcesFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: { bucket: path.join(__dirname, "../../../public"), opts: {} },
    },
    properties: {
      key: "productImage",
      file: "uploadImage",
      mimeType: "type",
      size: "size",
      filename: "filename",
    },

    uploadPath: (record, filename) =>
      `imagens/product-${record.get("productCode")}/${filename}`,
  }),
];
