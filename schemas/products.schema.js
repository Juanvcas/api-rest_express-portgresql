import Joi from 'joi';

const id = Joi.string().uuid();
const title = Joi.string().min(3).max(15);
const description = Joi.string();
const price = Joi.number().integer().min(1);
const category = Joi.object();
const image = Joi.string().uri();
const available = Joi.boolean();

const createProductSchema = Joi.object({
  title: title.required(),
  description: description,
  price: price.required(),
  category: category,
  image: image,
  available: available.required(),
});

const findOneProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  description: description,
  price: price,
  category: category,
  image: image,
  available: available,
});

const deleteProductSchema = Joi.object({
  id: id.required(),
});

export {
  createProductSchema,
  findOneProductSchema,
  updateProductSchema,
  deleteProductSchema,
};
