module.exports = knex => async (params, Message) => {
  const { id, ...updateContents } = params;

  try {
    await knex('messages').where('id', id).update({ ...updateContents });
    const updateResult = await knex('message').where('id', id);
    return updateResult.map(eachResult => new Message(eachResult));
  } catch (error) {
    return error;
  }
};
