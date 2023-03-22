import { User, UserSchema } from './users.model.js';

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
};

export { setupModels };
