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
exports.QuizService = void 0;
const clientDataBase_1 = require("../database/clientDataBase");
class QuizService {
    constructor() {
        this.database = clientDataBase_1.clientDataBase;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quiz = yield this.database.quiz.findMany({
                    select: {
                        id: true,
                        nome: true,
                    },
                });
                return quiz;
            }
            catch (error) {
                console.error("Erro ao buscar quizzes:", error);
                return null;
            }
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quiz = yield this.database.quiz.findUnique({ where: { id } });
                if (!quiz) {
                    return {};
                }
                const perguntasRespostas = yield this.database.pergunta.findMany({
                    where: {
                        quizId: id,
                    },
                    select: {
                        titulo: true,
                        Pergunta_Respota: {
                            select: {
                                resposta: true,
                                resultado: true,
                            },
                        },
                    },
                });
                // transforma em um modelo mais facil para ser consumido no front end
                const perguntas = perguntasRespostas.map((item) => ({
                    titulo: item.titulo,
                    respostas: item.Pergunta_Respota.map((pr) => ({
                        id: pr.resposta.id,
                        descricao: pr.resposta.descricao,
                        resultado: pr.resultado,
                    })),
                }));
                return { quiz, perguntas };
            }
            catch (error) {
                console.error("Erro ao buscar quizz ID:", error);
                return null;
            }
        });
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.QuizService = QuizService;
