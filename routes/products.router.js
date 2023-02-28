import express from 'express';
import { ProductsService } from '../services/products.service.js';
import {
  createProductSchema,
  findOneProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from '../schemas/products.schema.js';
import { validationHandler } from '../middlewares/validations.handler.js';

const productsRouter = express.Router();
const service = new ProductsService();

productsRouter.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

productsRouter.get(
  '/:id',
  validationHandler(findOneProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  }
);

productsRouter.post(
  '/',
  validationHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newProduct = await service.create(body);
      res.status(201).json({
        message: 'Product created',
        data: newProduct,
      });
    } catch (err) {
      next(err);
    }
  }
);

productsRouter.patch(
  '/:id',
  validationHandler(findOneProductSchema, 'params'),
  validationHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const product = await service.update(id, body);
      res.status(201).json({ message: 'Product updated', data: product });
    } catch (err) {
      next(err);
    }
  }
);

productsRouter.delete(
  '/:id',
  validationHandler(deleteProductSchema, 'params'),
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

export { productsRouter };
