const express = require('express');
const bodyParser = require('body-parser');

class Server {
  constructor({ router }) {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use('/api', router);
  }

  start() {
    return new Promise((resolve) => {
      this.express.listen(3000, () => {
        console.log('listing on localhost:3000')
        resolve();
      });
    });
  }
}

module.exports = Server;