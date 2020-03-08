const router = require('express').Router();
const login = require('./login');
const path = require('path');
const configs = require('../configs');

module.exports = app => {
  // Routes for serving the index.js of react
  router.get('/*', (req, res) => {
    res.sendFile(
      path.join(__dirname, configs.express.staticFiles, 'index.html')
    );
  });

  // Rotues when user tries to go to login
  router.get('/login', login);

  return router;
};
