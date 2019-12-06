import { Router } from 'express';

import PoiController from './app/Controllers/PoiController';

const routes = new Router();

routes.get('/pois', PoiController.index);
routes.get('/pois/nearestlocation', PoiController.show);
routes.post('/pois', PoiController.store);
routes.delete('/pois/:id', PoiController.delete);

export default routes;
