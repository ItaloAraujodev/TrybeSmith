import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/IUsers';

class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)', 
      [username, classe, level, password],
    );

    return { id: result.insertId, ...user };
  }
}

export default UsersModel;