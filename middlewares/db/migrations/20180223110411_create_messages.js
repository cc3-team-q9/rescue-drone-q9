exports.up = (knex, Promise) => knex.schema.createTable('messages', (table) => {
  table.increments();
  table.string('username', 50).notNullable();
  table.text('message');
  table.float('longitude').notNullable();
  table.float('latitude').notNullable();
  table.timestamp('called_at').defaultTo(knex.fn.now());
  table.integer('flight_plan_id').unsigned();
  table.foreign('flight_plan_id').references('flight_plans.id');
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('messages');
