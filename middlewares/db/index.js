const Knex = require('knex');

const config = require('./knexfile.js');
const messages = require('./messages/index');

const environment = process.env.NODE_ENV || 'development';
// const flightPlans = require('./flightPlans/index');

const databaseConfig = config[environment];

module.exports = () => {
  // const knex = Knex({
  //   client: databaseConfig.client,
  //   connection: {
  //     host: databaseConfig.connection.host,
  //     port: databaseConfig.connection.port,
  //     database: databaseConfig.connection.database,
  //   },
  // });

  const knex = Knex(databaseConfig);

  return ({
    messages: messages(knex),
    // flight_plans: flightPlans(knex),
  });
};
