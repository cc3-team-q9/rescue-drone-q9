module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_URL || '127.0.0.1',
    port: process.env.DATABASE_PORT || 5432,
    database: 'rescue_drone',
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
