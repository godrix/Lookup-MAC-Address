require('dotenv/config');
const knex = require('knex');

const { development, production } = require('../../knexfile');

const config =
  process.env.ENVIRONMENT === 'development' ? development : production;

const connection = knex(config);

module.exports = connection;
