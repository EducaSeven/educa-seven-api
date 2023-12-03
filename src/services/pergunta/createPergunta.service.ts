import { clientDataBase } from '../../database/clientDataBase';
import { PerguntaDto } from '../../dtos/perguntaDto';

export const createPergunta = async (pergunta: PerguntaDto) => {
  try {
    const perguntaCriada = await clientDataBase.pergunta.create({
      data: {
        titulo: pergunta.pergTitle,
        description: pergunta.pergDescription,
      },
    });

    pergunta.respostas.forEach(async (r) => {
      const respostaCriada = await clientDataBase.resposta.create({
        data: {
          descricao: r.respDescription,
        },
      });

      await clientDataBase.pergunta_Respota.create({
        data: {
          perguntaId: perguntaCriada.id,
          respostaId: respostaCriada.id,
          resultado: r.respResposta,
        },
      });
    });

    return { msg: 'Criado com sucesso' };
  } catch (error) {
    console.error('Erro ao salvar quiz:', error);
  }
};
