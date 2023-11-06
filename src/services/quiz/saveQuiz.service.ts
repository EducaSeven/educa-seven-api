import { clientDataBase } from '../../database/clientDataBase'

export const saveQuizUseCase = async (nome: string, perguntas: any[]) => {
  try {
    let savedQuiz = await clientDataBase.quiz.create({ data: { nome } })

    let savedQuestions = [] as any[]
    perguntas.forEach(async (pergunta) => {
      let question = {
        titulo: pergunta.titulo,
        quizId: savedQuiz.id,
      }

      const savedQuestion = await clientDataBase.pergunta.create({ data: question })
      savedQuestions.push(savedQuestion)
    })

    return { quiz: savedQuiz, perguntas: savedQuestions }
  } catch (error) {
    console.error('Erro ao salvar quiz:', error)
  }
}
