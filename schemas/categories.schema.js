import Joi from 'joi';

const id = Joi.number().integer();
const title = Joi.string().min(3).max(15);
const description = Joi.string();
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
  title: title.required(),
  description: description,
  image: image,
});

const findOneCategorySchema = Joi.object({
  id: id.required(),
});

const updateCategorySchema = Joi.object({
  title: title,
  description: description,
  image: image,
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
