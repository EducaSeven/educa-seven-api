import { Quiz } from "@prisma/client";
import { clientDataBase } from "../database/clientDataBase";
import { AbstractService } from "./abstractService";

export class QuizService implements AbstractService<Quiz> {
  private database;

  constructor() {
    this.database = clientDataBase;
  }

  async findAll(): Promise<Quiz[] | null> {
    try {
      return await this.database.quiz.findMany({});
    } catch (error) {
      console.error("Erro ao buscar quizzes:", error);
      return null;
    }
  }
  async findOne(id: string): Promise<{ id: string; nome: string } | null> {
    try {
      const quiz = await this.database.quiz.findUnique({
        where: { id },
        select: { perguntas: true },
      });
      if (!quiz) {
        return null;
      }
      return quiz;
    } catch (error) {
      console.error("Erro ao buscar quizz ID:", error);
      return null;
    }
  }
  create(data: any): Promise<{ id: string; nome: string }> {
    throw new Error("Method not implemented.");
  }
  update(id: string, data: any): Promise<{ id: string; nome: string }> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
