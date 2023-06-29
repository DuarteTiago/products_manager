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
exports.categoryService = void 0;
const models_1 = require("../models");
exports.categoryService = {
    findAllPaginated: (page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const { count, rows } = yield models_1.Category.findAndCountAll({
            attributes: ["id", "name", "position"],
            order: [["position", "ASC"]],
            limit: perPage,
            offset,
        });
        return {
            categories: rows,
            page,
            perPage,
            total: count,
        };
    }),
    findByIdWithProducts: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const categoryWithProducts = yield models_1.Category.findByPk(id, {
            attributes: ["id", "name"],
            include: {
                association: "products",
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
        return categoryWithProducts;
    }),
};
