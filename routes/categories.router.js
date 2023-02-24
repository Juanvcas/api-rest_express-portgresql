import express from 'express';
import { categories } from '../services/products.service.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/', async (req, res, next) => {
  try {
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

categoriesRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await categories.findOne(id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
});

categoriesRouter.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const newCategory = await categories.create(body);
    res.status(201).json({
      message: 'Category created',
      data: newCategory,
    });
  } catch (err) {
    next(err);
  }
});

categoriesRouter.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const category = await categories.update(id, body);
    res.status(201).json({ message: 'Category updated', data: category });
  } catch (err) {
    next(err);
  }
});

categoriesRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await categories.delete(id);
    res.status(204).json({ message: 'Category deleted', data: id });
  } catch (err) {
    next(err);
  }
});

export { categoriesRouter };
