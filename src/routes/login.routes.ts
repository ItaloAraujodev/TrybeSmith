import { Router } from 'express';
import LoginController from '../Controller/login.controller';

const loginRoutes = Router();
const loginController = new LoginController();

loginRoutes.post('/', loginController.login);

export default loginRoutes;