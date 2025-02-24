"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pontuacaoController_1 = require("../controllers/pontuacaoController");
const pontuacacaoRouter = express_1.default.Router();
// Rota para obter todos os quizzes
pontuacacaoRouter.get('/:id', pontuacaoController_1.getAllPontuacao);
pontuacacaoRouter.post('/', pontuacaoController_1.postPontuacao);
exports.default = pontuacacaoRouter;
