// src/adminjs/resources/user.ts

import { ResourceOptions } from "adminjs";

const userResourceOptions: ResourceOptions = {
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

export { userResourceOptions };
