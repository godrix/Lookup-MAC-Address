import { Router } from 'express';

import MacVendorController from '@controllers/MacVendorController';

const routes = new Router();

routes.get('/', async (req, res) => {
  return res.json({ 'hello world!': true });
});

routes.get('/mac/:mac', MacVendorController.index);


export default routes;
