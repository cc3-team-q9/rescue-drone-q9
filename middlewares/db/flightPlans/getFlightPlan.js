module.exports = (knex, FlightPlan) => async (params) => {
  const id = params;

  try {
    const flightPlans = await knex('flight_plans').where(id).orderBy('id', 'desc');
    return flightPlans.map(eachPlan => new FlightPlan(eachPlan));
  } catch (error) {
    return error;
  }
};
