import { Pool, ResultSetHeader } from 'mysql2/promise';
import ILogin from '../interfaces/ILogin';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async login(login: ILogin): Promise<ILogin> {
    const { username, password } = login;
    const [[result]] = await this.connection
      .execute<ILogin[] & ResultSetHeader>(
      `SELECT id FROM Trybesmith.Users WHERE username = ?
        AND password = ?`, 
      [username, password],
    );

    return result;
  }
}

export default LoginModel;