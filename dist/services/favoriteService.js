"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteService = void 0;
const models_1 = require("../models");
exports.favoriteService = {
    findByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorites = yield models_1.Favorite.findAll({
            attributes: [["user_id", "userId"]],
            where: { userId },
            include: {
                association: "Product",
                attributes: [
                    "id",
                    "name",
                    "description",
                    ["product_price", "productPrice"],
                    ["product_image", "productImage"],
                    ["product_code", "productCode"],
                ],
            },
        });
        return {
            userId,
            products: favorites.map((favorite) => favorite.Product),
        };
    }),
    create: (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorite = models_1.Favorite.create({
            productId,
            userId,
        });
        return favorite;
    }),
    delete: (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Favorite.destroy({
            where: {
                userId,
                productId,
            },
        });
    }),
    isFavorited: (userId, productId) => __awaiter(void 0, void 0, void 0, function* () {
        const favorite = yield models_1.Favorite.findOne({
            where: {
                userId,
                productId,
            },
        });
        return favorite !== null;
    }),
};
