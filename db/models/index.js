import { User, UserSchema } from './users.model.js';
import { Customer, CustomerSchema } from './customers.model.js';
import { Product, ProductSchema } from './products.model.js';
import { Category, CategorySchema } from './categories.model.js';

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));

  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Product.associate(sequelize.models);
  Category.associate(sequelize.models);
};

export { setupModels };
