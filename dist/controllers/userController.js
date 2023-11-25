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
exports.deleteUser = exports.getOneUser = exports.getAllUsers = exports.createUser = void 0;
const createUser_service_1 = require("../services/user/createUser.service");
const deleteUser_service_1 = require("../services/user/deleteUser.service");
const findAllUsers_service_1 = require("../services/user/findAllUsers.service");
const findOneUser_service_1 = require("../services/user/findOneUser.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, tipo } = req.body;
        const usuario = yield (0, createUser_service_1.createUserService)(nome, tipo);
        return res.status(201).json(usuario);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, findAllUsers_service_1.findAllUsersService)();
        return res.json(users);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = req.params.id;
        const user = yield (0, findOneUser_service_1.findOneUserService)(idUser);
        return res.json(user);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getOneUser = getOneUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = req.params.id;
        yield (0, deleteUser_service_1.deleteUserService)(idUser);
        return res.status(204).json();
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUser = deleteUser;
