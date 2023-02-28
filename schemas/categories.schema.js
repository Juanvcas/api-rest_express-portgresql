import Joi from 'joi';

const id = Joi.string().uuid();
const title = Joi.string().min(3).max(15);

const createCategorySchema = Joi.object({
  title: title.required(),
});

const findOneCategorySchema = Joi.object({
  id: id.required(),
});

const updateCategorySchema = Joi.object({
  title: title,
});

const deleteCategorySchema = Joi.object({
  id: id.required(),
});

export {
  createCategorySchema,
  findOneCategorySchema,
  updateCategorySchema,
  deleteCategorySchema,
};
