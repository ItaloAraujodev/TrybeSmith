import { Router } from 'express';
import UsersController from '../Controller/users.controller';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

export default usersRouter;