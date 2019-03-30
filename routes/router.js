import express from 'express';
import trips from './router-trips';
import registers from './router-registers';

const router = express.Router();

router.use('/trips', trips);
router.use('/register', registers);

export default router;
