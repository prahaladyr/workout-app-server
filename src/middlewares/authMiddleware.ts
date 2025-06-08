import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

export const authenticateJWT = passport.authenticate('jwt', { session: false });

export interface AuthenticatedRequest extends Request {
    user?: any; // You can type this based on your user model
}
