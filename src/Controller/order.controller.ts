import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  findAll = async (req: Request, res: Response) => {
    const order = await this.orderService.findAll();
    return res.status(200).json(order);
  }
  ;
}

export default OrderController;
