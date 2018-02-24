const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// router with db setup
const config = require('./config');
const middlewares = require('./middlewares/index')(config);
const apiRouter = require('./routes/api/index')(middlewares);

const app = express();

// middleware setup
app.use(logger('dev'));
app.use(bodyParser.json({ type: 'application/json' }));
// you cannot send nested objects to a server.
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
