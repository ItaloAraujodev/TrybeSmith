import { Request, Response } from 'express';
import Joi from 'joi';
import LoginService from '../services/login.service';

const shema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public login = async (request: Request, response: Response) => {
    const { error } = shema.validate(request.body);
    if (error) return response.status(400).json({ message: error.message });
    const { type, message } = await this.loginService.login(request.body);
    
    if (type) return response.status(type).json({ message });
    return response.status(200).json({ token: message });
  };
}

export default LoginController;