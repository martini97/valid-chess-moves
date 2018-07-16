import { Router } from 'express';

import positions from '@/controllers/positions';

const router = Router();
router.get('/:piece/:startAt', positions);

export default router;
