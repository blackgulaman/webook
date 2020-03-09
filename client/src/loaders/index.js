const log = require('../libs/winston')('loader/index.js');
module.exports = async ({ app }) => {
  await require('./mongodb')();
  log.info('MongoDB is now initialized!');
  await require('./express')({ app });
  log.info('Express configuration is successfully loaded!');
};
