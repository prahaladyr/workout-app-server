import express, { RequestHandler } from 'express';
import { createWorkoutSession, getWorkoutSessions, updateWorkoutSession } from '../controllers/workoutController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateJWT);
router.post('/', createWorkoutSession as RequestHandler);
router.get('/', getWorkoutSessions as RequestHandler);
router.put('/:id', updateWorkoutSession as RequestHandler);

export default router;