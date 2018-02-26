module.exports = (knex, FlightPlan) => async (params) => {
  const insertFlightPlan = params;

  try {
    const id = await knex('flight_plans').insert({
      geometry: JSON.stringify(insertFlightPlan.geometry),
      takeoff_latitude: insertFlightPlan.takeoff_latitude,
      takeoff_longitude: insertFlightPlan.takeoff_longitude,
      max_alittude_agl: insertFlightPlan.max_alittude_agl,
      pilot_id: insertFlightPlan.pilot_id,
      start_time: new Date(insertFlightPlan.start_time),
      end_time: new Date(insertFlightPlan.end_time),
      buffer: insertFlightPlan.buffer,
    }, 'id');

    const insertedMessage = await knex('flight_plans').where('id', id[0]);
    return insertedMessage.map(eachPlan => new FlightPlan(eachPlan));
  } catch (error) {
    return error;
  }
};
