import { Router } from 'express';

import {
  getTeasController,
  getTeaByIdController,
  createTeaController,
  deleteTeaController,
  upsertTeaController,
  patchTeaController,
} from '../controllers/teas.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/api/teas', ctrlWrapper(getTeasController));

router.get('/api/teas/:id', ctrlWrapper(getTeaByIdController));

router.post('/api/teas', ctrlWrapper(createTeaController));

router.delete('/api/teas/:id', ctrlWrapper(deleteTeaController));

router.put('/api/teas/:id', ctrlWrapper(upsertTeaController));

router.patch('/api/teas/:id', ctrlWrapper(patchTeaController));

export default router;
