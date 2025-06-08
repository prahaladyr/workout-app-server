import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { UserModel } from '../models/UserModel';
import dotenv from 'dotenv';

dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET!,
};

passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
        try {
            const user = await UserModel.findById(jwtPayload.sub).select('-password');
            if (user) return done(null, user);
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    })
);