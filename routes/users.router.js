import express from 'express';
import { UsersService } from '../services/users.service.js';
import {
  createUserSchema,
  findOneUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from '../schemas/users.scheme.js';
import { validationHandler } from '../middlewares/validations.handler.js';

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

usersRouter.get(
  '/:id',
  validationHandler(findOneUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.post(
  '/',
  validationHandler(createUserSchema, 'body'),
  async (req, res, next) => {
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
  }
);

usersRouter.patch(
  '/:id',
  validationHandler(findOneUserSchema, 'params'),
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const user = await service.update(id, body);
      res.status(201).json({ message: 'Product updated', data: user });
    } catch (err) {
      next(err);
    }
  }
);

usersRouter.delete(
  '/:id',
  validationHandler(deleteUserSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await service.delete(id);
      res.status(204).json({ message: 'Product deleted', data: id });
    } catch (err) {
      next(err);
    }
  }
);

export { usersRouter };
