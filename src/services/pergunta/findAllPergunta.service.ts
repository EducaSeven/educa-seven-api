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

    let pergunta_respota: any;

    perguntas.forEach(async (p) => {
      const respostas = await clientDataBase.pergunta_Respota.findMany({
        where: {
          perguntaId: p.id,
        },
        select: {
          resposta: true,
          resultado: true,
        },
      });

      pergunta_respota = [...pergunta_respota, { p, respostas }];
    });

    return pergunta_respota;
  } catch (error) {
    console.error('Erro ao retornar perguntas:', error);
  }
};
