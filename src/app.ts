import express from 'express';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/config';
import workoutRoutes from './routes/workoutRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import exerciseRoutes from './routes/exerciseRoutes';
import cors from 'cors';

import './config/passport';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);


export default app;
