const express = require('express');
const messagesRouter = require('./messages/index');
const flightPlansRouter = require('./flightPlans/index');

const router = express.Router();

module.exports = (middlewares) => {
  router.use('/messages', messagesRouter(middlewares));
  router.use('/flightPlans', flightPlansRouter(middlewares));

  return router;
};
