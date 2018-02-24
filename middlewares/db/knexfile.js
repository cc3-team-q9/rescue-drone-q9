module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'rescue_drone',
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
