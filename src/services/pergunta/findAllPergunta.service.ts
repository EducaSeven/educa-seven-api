import { clientDataBase } from '../../database/clientDataBase';

export const findAllPerguntas = async () => {
  try {
    const perguntas = await clientDataBase.pergunta.findMany({
      select: {
        id: true,
        titulo: true,
        description: true,
      },
    });

    const perguntas_respostas = perguntas.map(async (p) => {
      const respostas = await clientDataBase.pergunta_Respota.findMany({
        where: {
          perguntaId: p.id,
        },
        select: {
          resposta: true,
          resultado: true,
        },
      });

      return { p, respostas };
    });

    return { perguntas_respostas };
  } catch (error) {
    console.error('Erro ao retornar perguntas:', error);
  }
};
