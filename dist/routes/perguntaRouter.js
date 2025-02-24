"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const perguntaControlle_1 = require("../controllers/perguntaControlle");
const perguntaRouter = express_1.default.Router();
// Rota para obter todos os quizzes
perguntaRouter.post('/', perguntaControlle_1.postPergunta);
perguntaRouter.get('/all', perguntaControlle_1.getAllPerguntas);
perguntaRouter.get('/all/:quizId', perguntaControlle_1.getAllPerguntasWithIdQuiz);
perguntaRouter.get('/:id', perguntaControlle_1.getOnePergunta);
perguntaRouter.delete('/:id', perguntaControlle_1.deletePergunta);
perguntaRouter.post('/update', perguntaControlle_1.updatePergunta);
exports.default = perguntaRouter;
