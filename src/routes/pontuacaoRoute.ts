import express from 'express';
import { getAllPontuacao } from '../controllers/pontuacaoController';
const pontuacacaoRouter = express.Router();

// Rota para obter todos os quizzes
pontuacacaoRouter.get('/', getAllPontuacao);

export default pontuacacaoRouter;
