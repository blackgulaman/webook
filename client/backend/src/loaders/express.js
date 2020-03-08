const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const configs = require('../configs');

module.exports = async ({ app }) => {
  app.use(express.static(path.join(__dirname, configs.express.staticFiles)));
  app.use(cors());
  app.use(morgan('combined'));
  app.use('/client', require('../api')(app));
};
