exports.up = function (knex, Promise) {
  return knex.schema.createTable('flight_plans', (table) => {
    table.increments();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('flight_plans');
};
