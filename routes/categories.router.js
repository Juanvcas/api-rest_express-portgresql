import express from 'express';
import { categories } from '../services/products.service.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/', async (req, res) => {
  try {
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

categoriesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categories.findOne(id);
    category
      ? res.status(200).json(category)
      : res.status(404).json({ message: 'Category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

categoriesRouter.post('/', async (req, res) => {
  const body = req.body;
  try {
    const newCategory = await categories.create(body);
    res.status(201).json({
      message: 'Category created',
      data: newCategory,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

categoriesRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const category = await categories.update(id, body);
    category
      ? res.status(201).json({ message: 'Category updated', data: category })
      : res.status(404).json({ message: 'Category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

categoriesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categories.delete(id);
    category
      ? res.status(200).json({ message: 'Category deleted', data: id })
      : res.status(404).json({ message: 'Category not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { categoriesRouter };
