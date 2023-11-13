import { clientDataBase } from '../../database/clientDataBase';
import { PerguntaDto } from '../../dtos/perguntaDto';

export const createPergunta = async (pergunta: PerguntaDto) => {
  try {
    const perguntaCriada = await clientDataBase.pergunta.create({
      data: {
        titulo: pergunta.titulo,
      },
    });

    pergunta.respostas.forEach(async (r) => {
      const respostaCriada = await clientDataBase.resposta.create({
        data: {
          descricao: r.descricao,
        },
      });

      await clientDataBase.pergunta_Respota.create({
        data: {
          perguntaId: perguntaCriada.id,
          respostaId: respostaCriada.id,
          resultado: r.resultado,
        },
      });
    });
  } catch (error) {
    console.error('Erro ao salvar quiz:', error);
  }
};
