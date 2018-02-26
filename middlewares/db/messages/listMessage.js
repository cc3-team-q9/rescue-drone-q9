module.exports = (knex, Message) => async () => {
  try {
    const messages = await knex('messages').orderBy('id', 'desc');
    return messages.map(eachMessage => new Message(eachMessage));
  } catch (error) {
    return error;
  }
};
