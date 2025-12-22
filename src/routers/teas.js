import { Router } from 'express';

import {
  getTeasController,
  getTeaByIdController,
  createTeaController,
} from '../controllers/teas.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/api/teas', ctrlWrapper(getTeasController));

router.get('/api/teas/:id', ctrlWrapper(getTeaByIdController));

router.post('/api/teas', ctrlWrapper(createTeaController));

export default router;
