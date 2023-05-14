import { Router } from 'express';

import * as UserController from '../controllers/UserController.js';
import { loginValidation, registerValidation } from '../validations/auth.js';
import checkAuth from '../utils/checkAuth.js';
import handleValidationErrors from '../utils/handleValidationErrors.js';

const AuthRoutes = Router();

AuthRoutes.get('/me', checkAuth, UserController.getMe);
AuthRoutes.post('/login', loginValidation, handleValidationErrors, UserController.login);
AuthRoutes.post('/register', registerValidation, handleValidationErrors, UserController.register);

export default AuthRoutes;
