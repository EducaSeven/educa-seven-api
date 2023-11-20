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
exports.findOnePergunta = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");
const findOnePergunta = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pergunta = yield clientDataBase_1.clientDataBase.pergunta.findUnique({
            where: {
                id,
            },
        });
        const respostas = yield clientDataBase_1.clientDataBase.pergunta_Respota.findMany({
            where: {
                perguntaId: pergunta === null || pergunta === void 0 ? void 0 : pergunta.id,
            },
            select: {
                respostaId: true,
                resposta: true,
                resultado: true,
            },
        });
        return { pergunta, respostas };
    }
    catch (error) {
        console.error('Erro ao encontrar pergunta:', error);
    }
});
exports.findOnePergunta = findOnePergunta;
