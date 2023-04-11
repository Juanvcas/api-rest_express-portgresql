import { sequelize } from '../libs/postgres.pool.js';
import boom from '@hapi/boom';

class CustomersService {
  constructor() {}

  async create(data) {
    const newUser = await sequelize.models.User.create(data.user);
    const newCustomer = await sequelize.models.Customer.create({
      ...data,
      userId: newUser.id,
    });
    return { customer: newCustomer, user: newUser };
  }

  async find() {
    const res = await sequelize.models.Customer.findAll({
      include: ['user'],
    });
    return res;
  }

  async findOne(id) {
    const customer = await sequelize.models.Customer.findByPk(id, {
      include: ['user'],
    });
    if (customer) {
      return customer;
    } else {
      throw boom.notFound('Customer not found');
    }
  }

  async update(id, data) {
    const customer = await this.findOne(id);
    if (customer) {
      const res = await customer.update(data);
      return res;
    } else {
      throw boom.notFound('Customer not found');
    }
  }

  async delete(id) {
    const customer = await this.findOne(id);
    if (customer) {
      const res = await customer.destroy();
      return res;
    } else {
      throw boom.notFound('Customer not found');
    }
  }
}

export { CustomersService };
