"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
userRouter.post('/login', userController_1.postLogin);
// Rota para criar usuários
userRouter.post('/register', userController_1.createUser);
// Rota para obter todos os usuarios
userRouter.get('/', userController_1.getAllUsers);
// Rota para obter um usuario por ID
userRouter.get('/:id', userController_1.getOneUser);
// Rota para deleter usuario
userRouter.delete('/:id', userController_1.deleteUser);
exports.default = userRouter;
