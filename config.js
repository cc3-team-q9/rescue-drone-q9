module.exports = {
  database: {
    client: 'pg',
    connection: {
      host: process.env.DATABASE_URL || '127.0.0.1',
      port: process.env.DATABASE_PORT || 5432,
      database: 'rescue_drone',
    },
  },
  express: {
    port: process.env.PORT || 3000,
  },
};
