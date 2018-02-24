module.exports = knex => async (params) => {
  const { id } = params;

  try {
    await knex('messages').where('id', id).del();
    return 'success';
  } catch (error) {
    return error;
  }
};
