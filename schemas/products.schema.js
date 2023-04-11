import Joi from 'joi';

const id = Joi.number().integer();
const title = Joi.string().min(3).max(15);
const description = Joi.string();
const price = Joi.number().integer().min(1);
const image = Joi.string().uri();
const available = Joi.boolean();
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  title: title.required(),
  description: description,
  price: price.required(),
  image: image,
  available: available.required(),
  categoryId: categoryId.required(),
});

const findOneProductSchema = Joi.object({
  id: id.required(),
});

const updateProductSchema = Joi.object({
  title: title,
  description: description,
  price: price,
  image: image,
  available: available,
  categoryId: categoryId,
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
