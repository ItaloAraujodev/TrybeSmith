import jwt from 'jsonwebtoken';
import UsersModel from '../models/users.model';
import connection from '../models/connection';
import IUsers from '../interfaces/IUsers';

require('dotenv/config');

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create = async (user: IUsers): Promise<string> => {
    const create = await this.model.create(user);
    const { username, level, classe } = user;
    const { id } = create;
    const token = jwt.sign({ id, username, level, classe }, process.env.JWT_SECRET as string);
    return token;
  };
}

export default UsersService;