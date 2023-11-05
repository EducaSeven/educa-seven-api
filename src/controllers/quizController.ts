import { Request, Response } from "express";
import { findAllQuizzes } from "../services/quiz/findAll-quizzes.service";
import { findOneQuiz } from "../services/quiz/findOne-quiz.service";

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await findAllQuizzes();
    return res.json(quizzes);
  } catch (error) {
    console.log(error);
  }
};

export const getOneQuizze = async (req: Request, res: Response) => {
  try {
    const idQuiz = req.params.id;
    const quiz = await findOneQuiz(idQuiz);
    return res.json(quiz);
  } catch (error) {
    console.log(error);
  }
};
