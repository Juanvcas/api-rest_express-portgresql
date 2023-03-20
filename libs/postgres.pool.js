import { config } from '../config/config.js';
import pg from 'pg';
const { Pool } = pg;

const user = encodeURIComponent(config.dbUser);
const pass = encodeURIComponent(config.dbPass);
const uri = `postgres://${user}:${pass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: uri });

export { pool };
