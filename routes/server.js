import express from 'express';
import { productsRouter } from './products.js';
import { categoriesRouter } from './categories.js';
import { usersRouter } from './users.js';

const router = (app) => {
  const v1 = express.Router();

  v1.use('/products', productsRouter);
  v1.use('/categories', categoriesRouter);
  v1.use('/users', usersRouter);

  app.use('/api/v1', v1);
};

export default router;
