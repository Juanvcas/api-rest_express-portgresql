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
  res.status(200).json(products);
});

productsRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '555') {
    res.status(404).json({
      message: 'Product not found',
    });
  } else {
    res.status(200).json({
      id,
      title: 'Some Product',
      description: 'This is a product description...',
      categoryId: 14,
      price: 1500,
    });
  }
});

productsRouter.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Product created',
    data: body,
  });
});

productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(201).json({
    message: 'updated',
    data: body,
    id,
  });
});

productsRouter.put('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'updated',
    data: body,
  });
});

productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    message: 'deleted',
    id,
  });
});

export { productsRouter };
