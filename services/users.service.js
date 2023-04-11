import { sequelize } from '../libs/postgres.pool.js';
import boom from '@hapi/boom';

class UsersService {
  constructor() {}

  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async find() {
    const res = await sequelize.models.User.findAll({ include: 'customer' });
    return res;
  }

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id, {
      include: 'customer',
    });
    if (user) {
      return user;
    } else {
      throw boom.notFound('User not found');
    }
  }

  async update(id, data) {
    const user = await this.findOne(id);
    if (user) {
      const res = await user.update(data);
      return res;
    } else {
      throw boom.notFound('User not found');
    }
  }

  async delete(id) {
    const user = await this.findOne(id);
    if (user) {
      const res = await user.destroy();
      return res;
    } else {
      throw boom.notFound('User not found');
    }
  }
}

export { UsersService };
