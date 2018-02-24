const createMessage = require('./createMessage');
const deleteMessage = require('./deleteMessage');
const listMessage = require('./listMessage');
const updateMessage = require('./updateMessage');

class Message {
  constructor(_message) {
    this.message = _message;
  }

  seriarize() {
    return ({
      id: this.id,
      username: this.username,
      message: this.message,
      longitude: this.longtitude,
      latitude: this.latitude,
      calledAt: new Date(this.called_at),
    });
  }
}

module.exports = knex => ({
  createMessage: createMessage(knex, Message),
  deleteMessage: deleteMessage(knex, Message),
  listMessage: listMessage(knex, Message),
  updateMessage: updateMessage(knex, Message),
});
