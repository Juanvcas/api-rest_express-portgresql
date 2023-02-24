import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  async generate() {
    for (let index = 0; index < 10; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.department(),
      });
    }
  }

  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    const product = this.categories.find((cat) => cat.id === id);
    if (product) {
      return product;
    } else {
      throw boom.notFound('Product not found');
    }
  }

  async update(id, data) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      const category = this.categories[index];
      this.categories[index] = { ...category, ...data };
      return this.categories[index];
    } else {
      throw boom.notFound('Product not found');
    }
  }

  async delete(id) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return true;
    } else {
      throw boom.notFound("Category doesn't exist");
    }
  }
}

export { CategoriesService };
