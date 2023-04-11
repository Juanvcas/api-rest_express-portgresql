import { sequelize } from '../libs/postgres.pool.js';
import boom from '@hapi/boom';

class ProductsService {
  constructor() {}

  async create(data) {
    const newProduct = await sequelize.models.Product.create(data);
    return newProduct;
  }

  async find() {
    const res = await sequelize.models.Product.findAll({
      include: ['category'],
    });
    return res;
  }

  async findOne(id) {
    const product = await sequelize.models.Product.findByPk(id, {
      include: ['category'],
    });
    if (product) {
      if (product.available) {
        return product;
      } else {
        throw boom.conflict('Product not available');
      }
    } else {
      throw boom.notFound('Product not found');
    }
  }

  async update(id, data) {
    const product = this.findOne(id);
    if (product) {
      const res = await product.update(data);
      return res;
    } else {
      throw boom.notFound('Product not found');
    }
  }

  async delete(id) {
    const product = this.findOne(id);
    if (product) {
      const res = await product.destroy();
      return res;
    } else {
      throw boom.notFound('Product not found');
    }
  }
}

export { ProductsService };
