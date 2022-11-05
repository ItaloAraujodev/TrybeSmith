import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/ICreateProducts';

class Products {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;
    const [result] = await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO `Trybesmith`.Products (name, amount)VALUES (?, ?)', 
      [name, amount],
    );

    return { id: result.insertId, ...product };
  }

  async findAll() {
    const [result] = await this.connection
      .execute<ResultSetHeader>('SELECT * FROM `Trybesmith`.Products');
    return result;
  }
}

export default Products;