module.exports = (knex, Message) => async (params) => {
  const { id, ...updateContents } = params;

  try {
    await knex('messages').where(id).update(updateContents.updateContents);
    const updateResult = await knex('messages').where(id);
    return updateResult.map(eachResult => new Message(eachResult));
  } catch (error) {
    return error;
  }
};
