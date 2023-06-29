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
exports.usersController = void 0;
const userService_1 = require("../services/userService");
exports.usersController = {
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currentUser = req.user;
        try {
            return res.json(currentUser);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // PUT /users/current
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.user;
        const { firstName, lastName, email, birth } = req.body;
        try {
            const updatedUsers = yield userService_1.userService.update(id, {
                firstName,
                lastName,
                email,
                birth,
            });
            return res.json(updatedUsers);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // PUT /users/current/password
    updatePassword: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.user;
        const { currentPassword, newPassword } = req.body;
        user.checkPassword(currentPassword, (err, isSame) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (err)
                    return res.status(400).json({ message: err.message });
                if (!isSame)
                    return res.status(400).json({ message: "Senha incorreta" });
                yield userService_1.userService.updatePassword(user.id, newPassword);
                return res
                    .status(204)
                    .json({ message: "Senha atualizada com sucesso!" });
            }
            catch (err) {
                if (err instanceof Error) {
                    return res.status(400).json({ message: err.message });
                }
            }
        }));
    }),
};
