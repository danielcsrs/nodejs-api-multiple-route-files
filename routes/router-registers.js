import express from 'express';
import {
  createRegister,
  confirmRegister,
  setProfile,
  setPassword,
} from '../services/register';

const router = express.Router();

router.post('/', createRegister);
router.patch('/', confirmRegister);
router.post('/password', setPassword);
router.post('/profile', setProfile);

export default router;
