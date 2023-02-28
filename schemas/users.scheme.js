import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3);
const uname = Joi.string().alphanum();
const email = Joi.string().email();
const password = Joi.string().alphanum().min(12);
const image = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name,
  uname: uname.required(),
  email: email.required(),
  password: password.required(),
  image: image,
});

const findOneUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  uname: uname,
  email: email,
  password: password,
  image: image,
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

export {
  createUserSchema,
  findOneUserSchema,
  updateUserSchema,
  deleteUserSchema,
};
