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
exports.getPontuacaoDashboard = void 0;
exports.getPontuacaoDashboardById = void 0;
exports.getPontuacaoDashboardByUserId = void 0;
const clientDataBase_1 = require("../../database/clientDataBase");

const getPontuacaoDashboard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca todas as pontuações junto com os dados necessários
        const pontuacoes = yield clientDataBase_1.clientDataBase.pontuacacao.findMany({
            select: {
                pontuacao: true,
                Usuario: { select: { id: true, nome: true } },
                Quiz: { select: { nome: true } },
            },
        });

        // Agrupa as pontuações por quiz e usuário
        const resultado = pontuacoes.reduce((acc, pontuacao) => {
            const quizNome = pontuacao.Quiz?.nome || "Sem título";
            const usuarioId = pontuacao.Usuario?.id;
            const usuarioNome = pontuacao.Usuario?.nome || "Anônimo";

            // Se o quiz ainda não está no acumulador, cria a estrutura inicial
            if (!acc[quizNome]) {
                acc[quizNome] = {};
            }

            // Se o usuário ainda não está no quiz ou tem uma pontuação maior, atualiza
            if (!acc[quizNome][usuarioId] || pontuacao.pontuacao > acc[quizNome][usuarioId].pontuacao) {
                acc[quizNome][usuarioId] = {
                    nome: usuarioNome,
                    pontuacao: pontuacao.pontuacao,
                };
            }

            return acc;
        }, {});

        // Transforma o resultado em um array de quizzes com usuários
        const quizzes = Object.keys(resultado).map((quizNome) => ({
            titulo: quizNome,
            usuarios: Object.values(resultado[quizNome]),
        }));

        return quizzes;
    } catch (error) {
        console.error("Erro ao encontrar pontuações:", error);
        throw error;
    }
});


// Exemplo de saída:
// [
//     {
//         "titulo": "Quiz A",
//         "usuarios": [
//             { "nome": "Alice", "pontuacao": 90 },
//             { "nome": "Bob", "pontuacao": 70 }
//         ]
//     },
//     {
//         "titulo": "Quiz B",
//         "usuarios": [
//             { "nome": "Charlie", "pontuacao": 60 }
//         ]
//     }
// ]


"use strict";
const getPontuacaoDashboardById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca todas as pontuações associadas ao quiz pelo `id`
        const pontuacoes = yield clientDataBase_1.clientDataBase.pontuacacao.findMany({
            where: { quizId: id },
            select: {
                pontuacao: true,
                Usuario: { select: { id: true, nome: true } },
                Quiz: { select: { nome: true } },
            },
        });

        // Agrupa as pontuações por quiz e filtra as duplicadas
        const quizzes = pontuacoes.reduce((acc, atual) => {
            const quizNome = atual.Quiz?.nome || "Sem título";
            const usuarioId = atual.Usuario?.id;

            // Verifica se já existe o quiz no acumulador
            if (!acc[quizNome]) {
                acc[quizNome] = {
                    titulo: quizNome,
                    usuarios: [],
                };
            }

            // Busca o usuário na lista de usuários do quiz
            const usuarioExistente = acc[quizNome].usuarios.find((u) => u.id === usuarioId);

            if (!usuarioExistente) {
                // Se o usuário não existe, adiciona
                acc[quizNome].usuarios.push({
                    id: usuarioId,
                    nome: atual.Usuario?.nome || "Anônimo",
                    pontuacao: atual.pontuacao,
                });
            } else if (atual.pontuacao > usuarioExistente.pontuacao) {
                // Se o usuário já existe, atualiza a pontuação se a nova for maior
                usuarioExistente.pontuacao = atual.pontuacao;
            }

            return acc;
        }, {});

        // Transforma o objeto agrupado em um array
        const resultado = Object.values(quizzes).map((quiz) => ({
            titulo: quiz.titulo,
            usuarios: quiz.usuarios,
        }));

        return resultado;
    } catch (error) {
        console.error("Erro ao encontrar pontuações:", error);
        throw error;
    }
});

// Exemplo de saída:
// [
//     {
//         "titulo": "Quiz 1",
//         "usuarios": [
//             { "nome": "Alice", "pontuacao": 50 },
//             { "nome": "Bob", "pontuacao": 75 }
//         ],
//     },
// ]

const getPontuacaoDashboardByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Busca todas as pontuações do usuário
        const pontuacoes = yield clientDataBase_1.clientDataBase.pontuacacao.findMany({
            where: { usuarioId: userId },
            select: {
                pontuacao: true,
                Quiz: { select: { id: true, nome: true } },
            },
        });

        // Filtra para manter apenas a maior pontuação por quiz
        const quizzes = pontuacoes.reduce((acc, atual) => {
            const quizId = atual.Quiz?.id;
            const quizNome = atual.Quiz?.nome || "Sem título";

            if (!acc[quizId]) {
                // Adiciona o quiz se não estiver presente no acumulador
                acc[quizId] = {
                    id: quizId,
                    titulo: quizNome,
                    maiorPontuacao: atual.pontuacao,
                };
            } else if (atual.pontuacao > acc[quizId].maiorPontuacao) {
                // Atualiza a maior pontuação, se necessário
                acc[quizId].maiorPontuacao = atual.pontuacao;
            }

            return acc;
        }, {});

        // Transforma o objeto agrupado em um array
        const resultado = Object.values(quizzes).map((quiz) => ({
            id: quiz.id,
            titulo: quiz.titulo,
            maiorPontuacao: quiz.maiorPontuacao,
        }));

        return resultado;
    } catch (error) {
        console.error("Erro ao encontrar pontuações por usuário:", error);
        throw error;
    }
});

// Exemplo de saída:
// [
//     { "id": "1", "titulo": "Quiz 1", "maiorPontuacao": 75 },
//     { "id": "2", "titulo": "Quiz 2", "maiorPontuacao": 60 },
//     { "id": "3", "titulo": "Quiz 3", "maiorPontuacao": 90 }
// ]

exports.getPontuacaoDashboard = getPontuacaoDashboard;
exports.getPontuacaoDashboardById = getPontuacaoDashboardById;
exports.getPontuacaoDashboardByUserId = getPontuacaoDashboardByUserId;
