const { Router } = require('express');

const routes = new Router();

const MacVendorController = require('./app/Controllers/MacVendorController');

routes.get('/', async (req, res) => {
  return res.json({ 'hello world!': true });
});

routes.get('/mac/:mac', MacVendorController.index);

module.exports = routes;
