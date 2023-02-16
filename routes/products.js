import express from 'express';
import { faker } from '@faker-js/faker';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  const { limit } = req.query;
  const products = [];

  for (let index = 0; index < (limit || 50); index++) {
    products.push({
      title: faker.commerce.productName(),
      decription: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    title: 'Some Product',
    description: 'This is a product description...',
    categoryId: 14,
    price: 1500,
  });
});

export { productsRouter };
