import { faker } from '@faker-js/faker';

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
    return this.categories.find((cat) => cat.id === id);
  }

  async update(id, data) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      const category = this.categories[index];
      this.categories[index] = { ...category, ...data };
      return this.categories[index];
    }
  }

  async delete(id) {
    const index = this.categories.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return true;
    }
  }
}

export { CategoriesService };
