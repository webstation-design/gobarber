import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import athMiddleWare from './app/middlewares/auth';

import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import ProviderController from './app/controllers/ProviderController';
import ScheduleController from './app/controllers/ScheduleController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(athMiddleWare);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedules', ScheduleController.index);

routes.get('/notifications', NotificationController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;