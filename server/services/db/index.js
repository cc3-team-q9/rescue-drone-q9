const Knex = require('knex');

const messages = require('./messages/index');
const flightPlans = require('./flightPlans/index');

module.exports = (config) => {
  const knex = Knex({
    client: config.database.client,
    connection: {
      host: config.databaase.host,
      port: config.database.port,
      database: config.database.database,
    },
  });

  return ({
    messages: messages(knex),
    flight_plans: flightPlans(knex),
  });
};
