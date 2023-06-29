"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsResources = void 0;
const models_1 = require("../../models");
const category_1 = require("./category");
const product_1 = require("./product");
const user_1 = require("./user");
const favotites_1 = require("./favotites");
exports.adminJsResources = [
    {
        resource: models_1.Favorite,
        options: favotites_1.favoriteResourceOptions,
    },
    {
        resource: models_1.Category,
        options: category_1.categoryResourceOptions,
    },
    {
        resource: models_1.Product,
        options: product_1.productResourceOptions,
        features: product_1.productResourcesFeatures,
    },
    {
        resource: models_1.User,
        options: user_1.userResourceOptions,
    },
];
