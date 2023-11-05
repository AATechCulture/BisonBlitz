import pkg from 'pg';

export const getPostgresPool = () => {
  const { Pool } = pkg;
  const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'aadvantage',
    password: '',
    port: 5000,
  });
  return pool;
};
