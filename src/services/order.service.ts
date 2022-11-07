import OrderModel from '../models/order.model';
import connection from '../models/connection';
import IOrders from '../interfaces/IOrders';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async findAll(): Promise<IOrders[]> {
    const order = await this.model.findAll();
    return order;
  }
}

export default OrderService;