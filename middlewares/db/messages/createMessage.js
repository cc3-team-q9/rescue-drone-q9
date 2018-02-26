module.exports = (knex, Message) => async (params) => {
  const insertMassage = params;

  try {
    const id = await knex('messages').insert({
      username: insertMassage.username,
      message: insertMassage.message,
      longitude: insertMassage.longitude,
      latitude: insertMassage.latitude,
    }, 'id');

    const insertedMessage = await knex('messages').where('id', id[0]);
    return insertedMessage.map(eachMessage => new Message(eachMessage));
  } catch (error) {
    return error;
  }
};
