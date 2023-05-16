import { Router } from 'express';

import * as PetController from '../controllers/PetController.js';
import checkAuth from '../utils/checkAuth.js';
import handleValidationErrors from '../utils/handleValidationErrors.js';

const PetRoutes = Router();

PetRoutes.use(checkAuth);

PetRoutes.get('/me', PetController.getMyPetList);
PetRoutes.post('/me', PetController.createPet);
PetRoutes.get('/user', PetController.getUserPetList);
PetRoutes.get('/:id', PetController.getPet);
PetRoutes.patch('/:id', PetController.updatePetInfo);
PetRoutes.delete('/:id', PetController.deletePet);

export default PetRoutes;
