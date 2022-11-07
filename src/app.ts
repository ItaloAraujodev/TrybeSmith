import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRouter from './routes/users.routes';
import orderRouter from './routes/order.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRouter);
app.use('/orders', orderRouter);

export default app;
