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

import { validateBody } from '../middlewares/validateBody.js';
import { teaSchema, updateTeaSchema } from '../validation/teas.js';

import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/api/teas', ctrlWrapper(getTeasController));

router.get('/api/teas/:id', isValidId, ctrlWrapper(getTeaByIdController));

router.post(
  '/api/teas',
  validateBody(teaSchema),
  ctrlWrapper(createTeaController),
);

router.delete('/api/teas/:id', ctrlWrapper(deleteTeaController));

router.put(
  '/api/teas/:id',
  validateBody(updateTeaSchema),
  ctrlWrapper(upsertTeaController),
);

router.patch(
  '/api/teas/:id',
  validateBody(updateTeaSchema),
  ctrlWrapper(patchTeaController),
);

export default router;
