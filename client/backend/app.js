(async () => {
  // Imports all the modules that is needed
  const express = require('express');
  const app = express();
  const log = require('./libs/winston')('app.js');

  // Load all the modules and configurations
  await require('./loaders')({ app });

  // Initialize the service
  const service = require('http').Server(app);

  // It will run now the service with dedicated port
  service.listen(9000, error => {
    if (error) {
      log.error('Error running the service!');
      throw new Error('Error running the service!');
    } else {
      log.info(`Service is now running!`, { port: 9000 });
    }
  });
})();
