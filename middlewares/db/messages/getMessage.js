module.exports = (knex, Message) => async (params) => {
  const id = params;

  try {
    const messages = await knex('messages').where(id).orderBy('id', 'desc');
    return messages.map(eachMessage => new Message(eachMessage).seriarize());
  } catch (error) {
    return error;
  }
};
