const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

// router with db setup
const config = require('./config');
// If you add some middlewares, you can set configurations in config.js
// But as to knex, the configuration is set in knexfile.
const middlewares = require('./middlewares/index')(config);
const apiRouter = require('./routes/api/index')(middlewares);

const app = express();

// middleware setup
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(bodyParser.json({ type: 'application/json' }));
// you cannot send nested objects to a server.
app.use(bodyParser.urlencoded({ extended: false }));
app.enable('trust proxy');

// Route http to https
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

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
