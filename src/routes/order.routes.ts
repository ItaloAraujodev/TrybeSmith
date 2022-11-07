import { Router } from 'express';
import OrderController from '../Controller/order.controller';

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.get('/', orderController.findAll);

export default orderRouter;