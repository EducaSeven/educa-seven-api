import express, { Request, Response } from 'express';
import { createUser } from '../controllers/userController';

const userRouter = express.Router();

// Rota para obter todos os quizzes
userRouter.post('/', createUser);

export default userRouter;
