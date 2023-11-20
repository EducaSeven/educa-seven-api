import { Request, Response } from 'express';
import { createUserService } from '../services/user/createUser.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nome, tipo } = req.body;
    const usuario: any = await createUserService(nome, tipo);
    return res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
  }
};
