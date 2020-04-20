import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileController';
import UserController from './app/controllers/UserController';
import OrderController from './app/controllers/OrderController';
import ProblemController from './app/controllers/ProblemController';
import ProcessController from './app/controllers/ProcessController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// process
routes.get('/process/:id/:deliveres', ProcessController.index);
routes.get('/process/:id', ProcessController.index);
routes.put('/process', ProcessController.update);

// problems
routes.get('/problems/:id/cancel-delivery', ProblemController.index);
routes.get('/problems/:id', ProblemController.index);
routes.post('/problems', ProblemController.store);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files/:file', FileController.show);

routes.put('/orders/:id', OrderController.update);
// users routes
routes.post('/sessions', SessionController.store);
routes.get('/sessions/:email', SessionController.show);

routes.use(authMiddleware);
// rotas para user autenticado
// users
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

// recipients
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.get('/recipients', RecipientController.index);

// deliveryman
routes.get('/deliverymans', DeliverymanController.index);
routes.get('/deliverymans/:id', DeliverymanController.show);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.destroy);

// orders
routes.get('/orders', OrderController.index);
routes.get('/orders/problems', ProblemController.index);
routes.get('/orders/:id', OrderController.show);
routes.post('/orders', OrderController.store);
routes.delete('/orders/:id', OrderController.destroy);

export default routes;
