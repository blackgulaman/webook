const router = require('express').Router();
const login = require('./login');
const path = require('path');
const { express } = require('../configs');

module.exports = app => {
  // Routes for serving the index.js of react
  router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, express.staticFiless, 'index.html'));
  });

  // Rotues when user tries to go to login
  router.get('/login', login);

  return router;
};
