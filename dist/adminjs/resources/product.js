"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResourcesFeatures = exports.productResourceOptions = void 0;
const upload_1 = __importDefault(require("@adminjs/upload"));
const path_1 = __importDefault(require("path"));
exports.productResourceOptions = {
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
exports.productResourcesFeatures = [
    (0, upload_1.default)({
        provider: {
            local: { bucket: path_1.default.join(__dirname, "../../../public"), opts: {} },
        },
        properties: {
            key: "productImage",
            file: "uploadImage",
            mimeType: "type",
            size: "size",
            filename: "filename",
        },
        uploadPath: (record, filename) => `imagens/product-${record.get("productCode")}/${filename}`,
    }),
];
