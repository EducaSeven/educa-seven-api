import { clientDataBase } from "../../database/clientDataBase";

export const findAllQuizzes = async () => {
  try {
    const quiz = await clientDataBase.quiz.findMany({
      select: {
        id: true,
        nome: true,
      },
    });
    return quiz;
  } catch (error) {
    console.error("Erro ao buscar quizzes:", error);
    return null;
  }
};
