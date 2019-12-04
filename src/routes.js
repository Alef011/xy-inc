import { Router } from 'express';

import PoiController from './app/Controllers/PoiController';

const routes = new Router();

routes.get('/pois', PoiController.index);
routes.get('/pois', PoiController.show);
routes.post('/pois', PoiController.store);

export default routes;
