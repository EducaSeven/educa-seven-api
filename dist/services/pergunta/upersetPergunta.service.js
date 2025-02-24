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
exports.upersetPergunta = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");
const upersetPergunta = (pergunta) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const perguntaCriada = yield clientDataBase_1.clientDataBase.pergunta.update({
            where: {
                id: pergunta.id,
            },
            data: {
                titulo: pergunta.titulo,
                description: pergunta.description,
            },
        });
        pergunta.respostas.forEach((r) => __awaiter(void 0, void 0, void 0, function* () {
            const resposta = yield clientDataBase_1.clientDataBase.resposta.update({
                where: {
                    id: r.id,
                },
                data: {
                    descricao: r.description,
                },
            });
            const rp = yield clientDataBase_1.clientDataBase.pergunta_Respota.findFirst({
                where: {
                    respostaId: r.id,
                    perguntaId: pergunta.id,
                },
                select: {
                    id: true,
                },
            });
            yield clientDataBase_1.clientDataBase.pergunta_Respota.update({
                where: {
                    id: rp === null || rp === void 0 ? void 0 : rp.id,
                },
                data: {
                    resultado: r.resultado,
                },
            });
        }));
        return { msg: 'Atualizado com sucesso' };
    }
    catch (error) {
        console.error('Erro ao salvar quiz:', error);
    }
});
exports.upersetPergunta = upersetPergunta;
