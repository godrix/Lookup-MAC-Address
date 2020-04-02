const knex = require('knex');

require('dotenv/config');

const { development, production } = require('../../knexfile');

const config =
  process.env.ENVIRONMENT === 'development' ? development : production;

const connection = knex(config);

module.exports = connection;
