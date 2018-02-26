module.exports = knex => async (params) => {
  const id = params;

  try {
    await knex('flight_plans').where(id).del();
    return 'success';
  } catch (error) {
    return error;
  }
};
