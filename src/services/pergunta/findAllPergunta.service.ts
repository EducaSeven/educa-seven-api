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

    let pergunta_resposta = [] as any[];

    for (const pergunta of perguntas) {
      const resposta = await clientDataBase.pergunta_Respota.findMany({
        where: {
          perguntaId: pergunta.id,
        },
        select: {
          resposta: true,
          resultado: true,
        },
      });

      const respostas = resposta.map((r) => {
        const resultado = r.resultado;
        const description = r.resposta.descricao;
        return { description, resultado };
      });
      pergunta_resposta.push({ ...pergunta, respostas });
    }

    return pergunta_resposta;
  } catch (error) {
    console.error('Erro ao retornar perguntas:', error);
  }
};
