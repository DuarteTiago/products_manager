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
exports.productService = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
exports.productService = {
    findByIdWithProducts: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const withProducts = yield models_1.Product.findByPk(id, {
            attributes: [
                "id",
                "name",
                "description",
                ["product_price", "productPrice"],
                ["product_image", "productImage"],
                ["product_code", "productCode"],
            ],
        });
        return withProducts;
    }),
    getTopNewest: () => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield models_1.Product.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        });
        return products;
    }),
    findByName: (name, page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const { count, rows } = yield models_1.Product.findAndCountAll({
            attributes: [
                "id",
                "name",
                "description",
                ["product_price", "productPrice"],
                ["product_image", "productImage"],
                ["product_code", "productCode"],
            ],
            where: {
                name: {
                    [sequelize_1.Op.iLike]: `%${name}%`,
                },
            },
            limit: perPage,
            offset,
        });
        return {
            products: rows,
            page,
            perPage,
            total: count,
        };
    }),
};
