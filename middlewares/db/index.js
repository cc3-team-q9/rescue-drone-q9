const Knex = require('knex');

const config = require('./knexfile.js');
const messages = require('./messages/index');
const flightPlans = require('./flightPlans/index');

const environment = process.env.NODE_ENV || 'development';
const databaseConfig = config[environment];

module.exports = () => {
  const knex = Knex(databaseConfig);

  return ({
    messages: messages(knex),
    flight_plans: flightPlans(knex),
  });
};
