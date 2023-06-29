"use strict";
// src/adminjs/resources/user.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResourceOptions = void 0;
const userResourceOptions = {
    parent: {
        icon: "User",
    },
    navigation: "Administração",
    properties: {
        birth: {
            type: "date",
        },
        password: {
            type: "password",
        },
        role: {
            availableValues: [
                { value: "admin", label: "Administrador" },
                { value: "user", label: "Usuário Padrão" },
            ],
        },
    },
    editProperties: [
        "firstName",
        "lastName",
        "birth",
        "email",
        "password",
        "role",
    ],
    filterProperties: [
        "firstName",
        "lastName",
        "birth",
        "email",
        "role",
        "createdAt",
        "updatedAt",
    ],
    listProperties: ["id", "firstName", "email", "role"],
    showProperties: [
        "id",
        "firstName",
        "lastName",
        "birth",
        "email",
        "role",
        "createdAt",
        "updatedAt",
    ],
};
exports.userResourceOptions = userResourceOptions;
