import { faker } from '@faker-js/faker';

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  async generate() {
    for (let index = 0; index < 100; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        uname: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        image: faker.image.avatar(),
      });
    }
  }

  async create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.users.push(newUser);

    return newUser;
  }

  async find() {
    return this.users;
  }

  async findOne(un) {
    return this.users.find((user) => user.uname === un);
  }

  async update(id, data) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index !== -1) {
      const user = this.users[index];
      this.users[index] = { ...user, ...data };
      return this.users[index];
    }
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
  }
}

export { UsersService };
