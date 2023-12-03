import { clientDataBase } from '../../database/clientDataBase';

export const deleteOnePergunta = async (id: string) => {
  try {
    const pergunta = await clientDataBase.pergunta.findUnique({
      where: {
        id,
      },
    });

    const pergunta_resposta = await clientDataBase.pergunta_Respota.findFirst({
      where: {
        perguntaId: pergunta?.id,
      },
    });

    const resposta = await clientDataBase.resposta.findFirst({
      where: {
        id: pergunta_resposta?.respostaId,
      },
    });

    await clientDataBase.pergunta_Respota.delete({
      where: {
        id: pergunta_resposta?.id,
      },
    });

    await clientDataBase.pergunta.delete({
      where: {
        id,
      },
    });

    await clientDataBase.resposta.delete({
      where: {
        id: resposta?.id,
      },
    });

    return { msg: 'deletado com sucesso' };
  } catch (error) {
    console.error('Erro ao deleter pergunta:', error);
  }
};
