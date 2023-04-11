import express from 'express';
import { productsRouter } from '../routes/products.router.js';
import { categoriesRouter } from '../routes/categories.router.js';
import { usersRouter } from '../routes/users.router.js';
import { customersRouter } from '../routes/customers.router.js';

const router = (app) => {
  const v1 = express.Router();

  v1.use('/products', productsRouter);
  v1.use('/categories', categoriesRouter);
  v1.use('/users', usersRouter);
  v1.use('/customers', customersRouter);

  app.use('/api/v1', v1);
};

export default router;
