import express from 'express';
import {
  createTrip,
  getOneTrip,
  updateDriverPosition,
} from '../services/trip';

const router = express.Router();

router.post('', createTrip);
router.get('/:id', getOneTrip);
router.put('/:id/driver-position', updateDriverPosition);

export default router;
