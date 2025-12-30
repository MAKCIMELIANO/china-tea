import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginAdminSchema } from '../validation/auth.js';
import {
  loginAdminController,
  logoutUserController,
} from '../controllers/auth.js';

const router = Router();

router.post(
  '/login',
  validateBody(loginAdminSchema),
  ctrlWrapper(loginAdminController),
);

router.post('/logout', ctrlWrapper(logoutUserController));

export default router;
