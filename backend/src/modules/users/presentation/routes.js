import { createUserController } from './controllers/CreateUserController.js';

export default async function userRoutes(app) {
  app.post('/users', createUserController);
}