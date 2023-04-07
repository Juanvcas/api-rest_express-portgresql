import { config } from '../config/config.js';

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass);
const uri = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

export default {
  development: {
    url: uri,
    dialect: 'postgres',
  },
  production: {
    url: uri,
    dialect: 'postgres',
  },
};
