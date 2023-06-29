"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResourceOptions = void 0;
exports.categoryResourceOptions = {
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
