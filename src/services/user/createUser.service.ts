import { clientDataBase } from '../../database/clientDataBase';

export const createUserService = async (nome: string, tipo: boolean) => {
  try {
    return await clientDataBase.usuario.create({
      data: {
        nome,
        tipo,
      },
    });
  } catch (error) {
    console.error('Erro ao salvar quiz:', error);
  }
};
