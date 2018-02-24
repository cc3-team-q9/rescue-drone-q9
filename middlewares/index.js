const db = require('./db/index');

module.exports = config => ({
  db: db(config),
});
