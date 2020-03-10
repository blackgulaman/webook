const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const configs = require('../configs');
const log = require('../libs/winston')('mongodb.js');

module.exports = async () => {
  try {
    const db = mongoose.connection;
    let success = false;
    let connection = null;
    db.on('connecting', () => {
      log.info('MongoDB is connecting!');
    });

    db.on('connected', () => {
      success = true;
      log.info('MongoDB is connected!');
    });
    db.once('open', () => {
      log.info('MongoDB connection opened!');
    });
    db.on('reconnected', () => {
      success = true;
      log.info('MongoDB reconnected!');
    });
    db.on('disconnected', () => {
      log.warn('MongoDB disconnected!');
      connection = mongoose.connect(configs.db.DB_HOST, configs.db.DB_OPTIONS);
    });

    db.on('error', error => {
      log.error('MongoDB has error!', error);
      mongoose.disconnect();
    });
    connection = await mongoose.connect(
      configs.db.DB_HOST,
      configs.db.DB_OPTIONS,
      err => {
        if (err) throw new Error('Failed to connect to db');
      }
    );
    if (success) {
      return connection;
    }
  } catch (error) {
    log.error('Error in catch! ', error);
    return null;
  }
};
