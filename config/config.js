import dotenv from 'dotenv';
dotenv.config();

export const config = {
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASSWORD,
};
