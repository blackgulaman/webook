(async () => {
  // Imports all the modules that is needed
  const express = require('express');
  const app = express();
  const log = require('./libs/winston')('app.js');
  const configs = require('./configs');

  // Load all the modules and configurations
  await require('./loaders')({ app });

  // Initialize the service to be run
  const service = configs.app.isHttp ?
    require('http').Server(app) :
    require('https').createServer(configs.express.certificates, app);

  // It will run now the service with dedicated port
  service.listen(configs.app.port, error => {
    if (error) {
      log.error('Error running the service!');
      throw new Error('Error running the service!');
    } else {
      log.info(`Service is now running!`, { port: configs.app.port });
    }
  });
})();