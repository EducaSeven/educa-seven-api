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

    return { perguntas };
  } catch (error) {
    console.error('Erro ao retornar perguntas:', error);
  }
};
