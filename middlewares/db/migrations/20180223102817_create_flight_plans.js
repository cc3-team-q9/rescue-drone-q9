exports.up = (knex, Promise) => knex.schema.createTable('flight_plans', (table) => {
  table.increments();
  table.json('geometry').notNullable();
  table.float('takeoff_latitude').notNullable();
  table.float('takeoff_longitude').notNullable();
  table.float('max_alittude_agl').notNullable();
  table.string('pilot_id', 10).notNullable();
  table.dateTime('start_time').notNullable();
  table.dateTime('end_time').notNullable();
  table.integer('buffer').notNullable();
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('flight_plans');
