import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrders from '../interfaces/IOrders';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute<IOrders[] & ResultSetHeader>(`
       SELECT o.id, o.userId, JSON_ARRAYAGG(p.id)
    productsIds FROM Trybesmith.Orders as o LEFT JOIN Trybesmith.Products AS p ON
    o.id = p.orderId GROUP BY o.id;`);

    return result;
  }
}

export default OrderModel;