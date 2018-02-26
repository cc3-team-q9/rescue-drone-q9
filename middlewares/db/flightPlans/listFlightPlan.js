module.exports = (knex, FlightPlan) => async () => {
  try {
    const flightPlans = await knex('flight_plans').orderBy('id', 'desc');
    return flightPlans.map(eachPlan => new FlightPlan(eachPlan));
  } catch (error) {
    return error;
  }
};
