import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionRoutes from './session.routes';
import countRoutes from './count.routes';
import typesCountRoutes from './typescounts.routes';

const routes = Router();
routes.use(usersRoutes);
routes.use(sessionRoutes);
routes.use(countRoutes);
routes.use(typesCountRoutes);

export default routes;
