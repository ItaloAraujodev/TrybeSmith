import express from 'express';
import productsRoutes from './routes/products.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRouter);

export default app;
