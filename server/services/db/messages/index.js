const listMessage = require('./listMessage');
const getMessage = require('./getMessage');
const updateMessage = require('./updateMessage');
const deleteMessage = require('./deleteMessage');

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
  listMessage: listMessage(knex, Message),
  getMessage: getMessage(knex, Message),
  updateMessage: updateMessage(knex, Message),
  deleteMessage: deleteMessage(knex, Message),
});
