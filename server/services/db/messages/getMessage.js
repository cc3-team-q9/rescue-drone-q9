module.exports = (knex, Message) => async (params) => {
  const { _id } = params;

  try {
    const message = await knex('messages').where({ id: _id });
    return message.map(eachMessage => new Message(eachMessage));
  } catch (error) {
    return error;
  }
};
