import { Request, Response } from "express";
import { QuizService } from "../services/quizService";

const client = new QuizService();

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await client.findAll();
    return res.json(quizzes);
  } catch (error) {
    console.log(error);
  }
};

export const getOneQuizze = async (req: Request, res: Response) => {
  try {
    const idQuiz = req.body.id;
    const quiz = await client.findOne(idQuiz);
    return res.json(quiz);
  } catch (error) {
    console.log(error);
  }
};
