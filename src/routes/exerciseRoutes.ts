import express, { RequestHandler } from 'express';
import { createExercise, getExercises, updateExercise } from '../controllers/exerciseController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateJWT); // All exercise routes are protected
router.post('/', createExercise as RequestHandler);
router.get('/', getExercises as RequestHandler);
router.put('/:id', updateExercise as RequestHandler);

export default router;
