import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';
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
        available: faker.datatype.boolean(),
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
    const product = this.products.find((product) => product.id === id);
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

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      const product = this.products[index];
      this.products[index] = { ...product, ...changes };
      return this.products[index];
    } else {
      throw boom.notFound('Product not found');
    }
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    } else {
      throw boom.notFound("Product doesn't exist");
    }
  }
}

export { ProductsService, categories };
