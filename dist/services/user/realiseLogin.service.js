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
exports.realiseLogin = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");
const realiseLogin = (usuario, senha) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield clientDataBase_1.clientDataBase.usuario.findFirst({
            where: {
                nome: usuario,
                senha: senha,
            },
            select: { id: true, email: true, nome: true, tipo: true },
        });
        if (!user) {
            return { msg: 'usuario nao encontrado' };
        }
        return user;
    }
    catch (error) {
        console.error('Erro ao buscar usuário ID:', error);
        return null;
    }
});
exports.realiseLogin = realiseLogin;
