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
exports.deleteOnePergunta = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");
const deleteOnePergunta = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield clientDataBase_1.clientDataBase.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Encontra todas as respostas associadas à pergunta
            const respostas = yield prisma.pergunta_Respota.findMany({
                where: {
                    perguntaId: id,
                },
            });
            // Deleta as respostas associadas à pergunta
            yield prisma.pergunta_Respota.deleteMany({
                where: {
                    perguntaId: id,
                },
            });
            // Deleta a pergunta
            yield prisma.pergunta.delete({
                where: {
                    id: id,
                },
            });
            // Deleta as respostas encontradas
            yield prisma.resposta.deleteMany({
                where: {
                    id: {
                        in: respostas.map((r) => r.respostaId),
                    },
                },
            });
        }));
        return { msg: 'deletado com sucesso' };
    }
    catch (error) {
        console.error('Erro ao deleter pergunta:', error);
    }
});
exports.deleteOnePergunta = deleteOnePergunta;
