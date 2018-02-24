const Knex = require('knex');

const messages = require('./messages/index');
// const flightPlans = require('./flightPlans/index');

module.exports = (config) => {
  const knex = Knex({
    client: config.database.client,
    connection: {
      host: config.database.connection.host,
      port: config.database.connection.port,
      database: config.database.connection.database,
    },
  });

  return ({
    messages: messages(knex),
    // flight_plans: flightPlans(knex),
  });
};
