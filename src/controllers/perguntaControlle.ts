import { Request, Response } from 'express';
import { PerguntaDto } from '../dtos/perguntaDto';
import { createPergunta } from '../services/pergunta/createPergunta.service';
import { findAllPerguntas } from '../services/pergunta/findAllPergunta.service';
import { findOnePergunta } from '../services/pergunta/findOneQuestion.service';

export const postPergunta = async (req: Request, res: Response) => {
  try {
    const data: PerguntaDto = req.body;
    const resp = await createPergunta(data);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPerguntas = async (req: Request, res: Response) => {
  try {
    const resp = await findAllPerguntas();
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getOnePergunta = async (req: Request, res: Response) => {
  try {
    console.log('teste');
    const resp = await findOnePergunta(req.params.id);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};
