import express from 'express';
import { CategoriesService } from '../services/categories.service.js';
import {
  createCategorySchema,
  findOneCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
} from '../schemas/categories.schema.js';
import { validationHandler } from '../middlewares/validations.handler.js';

const categoriesRouter = express.Router();
const service = new CategoriesService();

categoriesRouter.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

categoriesRouter.get(
  '/:id',
  validationHandler(findOneCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await service.findOne(id);
      res.status(200).json(category);
    } catch (err) {
      next(err);
    }
  }
);

categoriesRouter.post(
  '/',
  validationHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newCategory = await service.create(body);
      res.status(201).json({
        message: 'Category created',
        data: newCategory,
      });
    } catch (err) {
      next(err);
    }
  }
);

categoriesRouter.patch(
  '/:id',
  validationHandler(findOneCategorySchema, 'params'),
  validationHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const category = await service.update(id, body);
      res.status(201).json({ message: 'Category updated', data: category });
    } catch (err) {
      next(err);
    }
  }
);

categoriesRouter.delete(
  '/:id',
  validationHandler(deleteCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      await service.delete(id);
      res.status(204).json({ message: 'Category deleted', data: id });
    } catch (err) {
      next(err);
    }
  }
);

export { categoriesRouter };
