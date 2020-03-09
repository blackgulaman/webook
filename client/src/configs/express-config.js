const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * This prefix will automatically append '/client'
   * for all the routes. ex: https://localhost:9000/client
   */
  apiPrefix: '/client',

  staticFiles: path.resolve(__dirname, '../../frontend', 'build'),

  certificates: {
    key: fs.readFileSync(path.join(__dirname, '../certificates/key.pem')),
    cert: fs.readFileSync(
      path.join(__dirname, '../certificates/certificate.pem')
    )
  }
};
