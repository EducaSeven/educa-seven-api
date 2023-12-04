import express from 'express';
import {
  deletePergunta,
  getAllPerguntas,
  getOnePergunta,
  postPergunta,
  updatePergunta,
} from '../controllers/perguntaControlle';

const perguntaRouter = express.Router();

// Rota para obter todos os quizzes
perguntaRouter.post('/', postPergunta);

perguntaRouter.get('/all', getAllPerguntas);

perguntaRouter.get('/:id', getOnePergunta);

perguntaRouter.delete('/:id', deletePergunta);

perguntaRouter.post('/update', updatePergunta);

export default perguntaRouter;
