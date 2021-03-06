module.exports = (knex, FlightPlan) => async (params) => {
  const { id, ...updateContents } = params;

  Object.keys(updateContents).forEach((eachKey) => {
    if (eachKey === 'geometry') {
      updateContents.eachKey = JSON.stringify(updateContents.eachKey);
    }
  });

  try {
    await knex('flight_plans').where(id).update(updateContents.updateContents);
    const updateResult = await knex('flight_plans').where(id);
    return updateResult.map(eachResult => new FlightPlan(eachResult));
  } catch (error) {
    return error;
  }
};
