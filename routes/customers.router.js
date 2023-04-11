import express from 'express';
import { CustomersService } from '../services/customers.service.js';
import {
  createCustomerSchema,
  findOneCustomerSchema,
  updateCustomerSchema,
  deleteCustomerSchema,
} from '../schemas/customers.schema.js';
import { validationHandler } from '../middlewares/validations.handler.js';

const customersRouter = express.Router();
const service = new CustomersService();

customersRouter.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
});

customersRouter.get(
  '/:id',
  validationHandler(findOneCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const customer = await service.findOne(id);
      res.status(200).json(customer);
    } catch (err) {
      next(err);
    }
  }
);

customersRouter.post(
  '/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newCustomer = await service.create(body);
      res.status(201).json({
        message: 'Customer created',
        data: newCustomer,
      });
    } catch (err) {
      next(err);
    }
  }
);

customersRouter.patch(
  '/:id',
  validationHandler(findOneCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const customer = await service.update(id, body);
      res.status(201).json({ message: 'Customer updated', data: customer });
    } catch (err) {
      next(err);
    }
  }
);

customersRouter.delete(
  '/:id',
  validationHandler(deleteCustomerSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await service.delete(id);
      res.status(204).json({ message: 'Customer deleted', data: id });
    } catch (err) {
      next(err);
    }
  }
);

export { customersRouter };
