const express = require('express');

const { errors } = require('celebrate');
const cors = require('cors');

const routes = require('./routes');

require('dotenv/config');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(errors());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
