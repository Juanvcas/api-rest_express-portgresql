import { Sequelize } from 'sequelize';
import { config } from '../config/config.js';
import { setupModels } from '../db/models/index.js';

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass);
const uri = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(uri, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

export { sequelize };
