import { faker } from '@faker-js/faker';
import { CategoriesService } from './categories.service.js';

const categories = new CategoriesService();

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const allCategories = await categories.find();
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: parseInt(faker.commerce.price()),
        category:
          allCategories[Math.floor(Math.random() * allCategories.length)],
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      const product = this.products[index];
      this.products[index] = { ...product, ...changes };
      return this.products[index];
    }
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
  }
}

export { ProductsService, categories };
