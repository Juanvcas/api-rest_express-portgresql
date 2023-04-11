import Joi from 'joi';

const id = Joi.string();
const fname = Joi.string().min(3);
const lname = Joi.string().min(3);
const phone = Joi.number();
const userId = Joi.number().integer();

const name = Joi.string().min(3);
const uname = Joi.string().alphanum().min(3);
const email = Joi.string().email();
const password = Joi.string().alphanum().min(12);
const role = Joi.string();
const image = Joi.string().uri();

const createCustomerSchema = Joi.object({
  fname: fname.required(),
  lname: lname.required(),
  phone: phone,
  user: Joi.object({
    name: name,
    uname: uname.required(),
    email: email.required(),
    password: password.required(),
    role: role,
    image: image,
  }),
});

const findOneCustomerSchema = Joi.object({
  id: id.required(),
});

const updateCustomerSchema = Joi.object({
  fname: fname,
  lname: lname,
  phone: phone,
  userId: userId,
});

const deleteCustomerSchema = Joi.object({
  id: id.required(),
});

export {
  createCustomerSchema,
  findOneCustomerSchema,
  updateCustomerSchema,
  deleteCustomerSchema,
};
