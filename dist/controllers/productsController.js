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
exports.productsController = void 0;
const productService_1 = require("../services/productService");
const getPaginationParams_1 = require("../helpers/getPaginationParams");
const models_1 = require("../models");
exports.productsController = {
    //GET/products/newest
    newest: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newestProducts = yield productService_1.productService.getTopNewest();
            return res.json(newestProducts);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    //GET / products/search?name=
    search: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = req.query;
        const [page, perPage] = (0, getPaginationParams_1.getPaginationParams)(req.query);
        try {
            if (typeof name !== "string")
                throw new Error("name param must be of type string");
            const products = yield productService_1.productService.findByName(name, page, perPage);
            return res.json(products);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // GET/products
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const products = yield models_1.Product.findAll();
        return res.json(products);
    }),
    // GET/products/:id
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const product = yield productService_1.productService.findByIdWithProducts(id);
            return res.json(product);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
