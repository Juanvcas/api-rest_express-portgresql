import Joi from 'joi';

const id = Joi.string();
const name = Joi.string().min(3);
const uname = Joi.string().alphanum().min(3);
const email = Joi.string().email();
const password = Joi.string().alphanum().min(12);
const role = Joi.string();
const image = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name,
  uname: uname.required(),
  email: email.required(),
  password: password.required(),
  role: role,
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
  role: role,
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
