import express, { RequestHandler } from 'express';
import { getAllUsers } from '../controllers/userController';
import { authenticateJWT } from '../middlewares/authMiddleware';

const router = express.Router();

router.use(authenticateJWT); // All user routes are protected
router.get('/', getAllUsers as RequestHandler);

export default router;
