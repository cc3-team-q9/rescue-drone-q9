const app = require('./app');
const config = require('./config');

app.listen(config.express.port, () => console.log(`Now server is listening on ${config.express.port}`));
