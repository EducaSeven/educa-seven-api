import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Rota para obter todos os quizzes
router.get("/quizzes", async (req: Request, res: Response) => {
  try {
    const quizzes = await prisma.quiz.findMany();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter os quizzes." });
  }
});

// Rota para obter um quiz por ID
router.get("/quizzes/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const quiz = await prisma.quiz.findUnique({
      where: { id },
    });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter o quiz." });
  }
});

export default router;
