import express from 'express';
import { ProductsService } from '../services/products.service.js';

const productsRouter = express.Router();
const service = new ProductsService();

productsRouter.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.findOne(id);

    product
      ? res.status(200).json(product)
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productsRouter.post('/', async (req, res) => {
  const body = req.body;
  try {
    const newProduct = await service.create(body);
    res.status(201).json({
      message: 'Product created',
      data: newProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productsRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const product = await service.update(id, body);

    product
      ? res.status(201).json({ message: 'Product updated', data: product })
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.delete(id);
    product
      ? res.status(200).json({ message: 'Product deleted', data: id })
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { productsRouter };
