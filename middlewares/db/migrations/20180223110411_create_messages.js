exports.up = function (knex, Promise) {
  return knex.schema.createTable('messages', (table) => {
    table.increments();
    table.string('username', 50).notNullable();
    table.text('message');
    table.float('longtitude').notNullable();
    table.float('latitude').notNullable();
    table.timestamp('called_at').defaultTo(knex.fn.now());
    table.integer('flight_plan_id').unsigned();
    table.foreign('flight_plan_id').references('flight_plans.id');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('messages');
};
