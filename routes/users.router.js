import express from 'express';
import { UsersService } from '../services/users.service.js';

const usersRouter = express.Router();
const service = new UsersService();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

usersRouter.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await service.findOne(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

usersRouter.post('/', async (req, res, next) => {
  const body = req.body;
  try {
    const newUser = await service.create(body);
    res.status(201).json({
      message: 'Product created',
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
});

usersRouter.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const user = await service.update(id, body);
    res.status(201).json({ message: 'Product updated', data: user });
  } catch (err) {
    next(err);
  }
});

usersRouter.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await service.delete(id);
    res.status(204).json({ message: 'Product deleted', data: id });
  } catch (err) {
    next(err);
  }
});

export { usersRouter };
