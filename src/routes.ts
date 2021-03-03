import * as express from 'express';

import urlcontroller from './app/controllers/UrlController';

const routes = express.Router();

routes.get('/:encrypt',urlcontroller.show);
routes.post('/url/create',urlcontroller.create);

export default routes;

