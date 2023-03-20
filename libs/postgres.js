import pg from 'pg';
const { Client } = pg;

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'juan',
    password: 'juanp1234',
    database: 'yard-sale-store',
  });

  await client.connect();
  return client;
};

export { getConnection };
