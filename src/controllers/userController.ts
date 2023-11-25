import { Request, Response } from 'express';
import { createUserService } from '../services/user/createUser.service';
import { deleteUserService } from '../services/user/deleteUser.service';
import { findAllUsersService } from '../services/user/findAllUsers.service';
import { findOneUserService } from '../services/user/findOneUser.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nome, tipo } = req.body;
    const usuario: any = await createUserService(nome, tipo);
    return res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAllUsersService();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const idUser = req.params.id;
    const user = await findOneUserService(idUser);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const idUser = req.params.id;
    await deleteUserService(idUser);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};