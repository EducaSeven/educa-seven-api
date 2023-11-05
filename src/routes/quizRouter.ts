import express from "express";
import { getAllQuizzes, getOneQuizze } from "../controllers/quizController";

const quizRouter = express.Router();

// Rota para obter todos os quizzes
quizRouter.get("/", getAllQuizzes);

// Rota para obter um quiz por ID
quizRouter.get("/:id", getOneQuizze);

export default quizRouter;
