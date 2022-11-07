import jwt from 'jsonwebtoken';
import LoginModel from '../models/login.model';
import ILogin from '../interfaces/ILogin';
import connection from '../models/connection';

interface Type {
  type: number | null;
  message: string;
}

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: ILogin): Promise<Type> {
    const { username } = login;
    const response = await this.model.login(login);

    if (!response) {
      return { type: 401, message: 'Username or password invalid' };
    }

    const segredo = process.env.JWT_SECRET;
    const { id } = response;
    
    const token = jwt.sign({ id, username }, segredo as string);
    return { type: null, message: token };
  }
}

export default LoginService;