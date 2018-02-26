const createMessage = require('./createMessage');
const deleteMessage = require('./deleteMessage');
const getMessage = require('./getMessage');
const listMessage = require('./listMessage');
const updateMessage = require('./updateMessage');

class Message {
  constructor(_message) {
    this.message = _message;
  }

  seriarize() {
    return ({
      id: this.message.id,
      username: this.message.username,
      message: this.message.message,
      longitude: this.message.longitude,
      latitude: this.message.latitude,
      calledAt: new Date(this.message.called_at),
    });
  }
}

module.exports = knex => ({
  createMessage: createMessage(knex, Message),
  deleteMessage: deleteMessage(knex, Message),
  getMessage: getMessage(knex, Message),
  listMessage: listMessage(knex, Message),
  updateMessage: updateMessage(knex, Message),
});
