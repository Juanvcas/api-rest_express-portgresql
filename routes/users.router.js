import express from 'express';
import { UsersService } from '../services/users.service.js';

const usersRouter = express.Router();
const service = new UsersService();

usersRouter.get('/', async (req, res) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.findOne(id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.post('/', async (req, res) => {
  const body = req.body;
  try {
    const newUser = await service.create(body);
    res.status(201).json({
      message: 'Product created',
      data: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const user = await service.update(id, body);
    user
      ? res.status(201).json({ message: 'Product updated', data: user })
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

usersRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.delete(id);
    user
      ? res.status(200).json({ message: 'Product deleted', data: id })
      : res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { usersRouter };
