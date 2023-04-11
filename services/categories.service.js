import { sequelize } from '../libs/postgres.pool.js';
import boom from '@hapi/boom';

class CategoriesService {
  constructor() {}

  async create(data) {
    const newCategory = await sequelize.models.Category.create(data);
    return newCategory;
  }

  async find() {
    const res = await sequelize.models.Category.findAll();
    return res;
  }

  async findOne(id) {
    const category = await sequelize.models.Category.findByPk(id, {
      include: ['products'],
    });
    if (category) {
      return category;
    } else {
      throw boom.notFound('Category not found');
    }
  }

  async update(id, data) {
    const category = this.findOne(id);
    if (category) {
      const res = await category.update(data);
      return res;
    } else {
      throw boom.notFound('Category not found');
    }
  }

  async delete(id) {
    const category = this.findOne(id);
    if (category) {
      const res = await category.destroy();
      return res;
    } else {
      throw boom.notFound('Category not found');
    }
  }
}

export { CategoriesService };
