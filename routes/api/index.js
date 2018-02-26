const express = require('express');
const messagesRouter = require('./messages/index');

const router = express.Router();

module.exports = (middlewares) => {
  router.use('/messages', messagesRouter(middlewares));

  return router;
};
