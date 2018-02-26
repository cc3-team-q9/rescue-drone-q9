exports.up = (knex, Promise) => knex.schema.createTable('flight_plans', (table) => {
  table.increments();
  table.json('geometry');
  table.float('takeoff_latitude');
  table.float('takeoff_longitude');
  table.float('max_alittude_agl');
  table.string('pilot_id');
  table.dateTime('start_time');
  table.dateTime('end_time');
  table.integer('buffer');
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('flight_plans');
