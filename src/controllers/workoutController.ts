import { Request, RequestHandler, Response } from 'express';
import { WorkoutSessionModel } from '../models/WorkoutSessionModel';

export const getWorkoutSessions = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user._id;

        const workouts = await WorkoutSessionModel.find({ userId }).populate('exercises.exerciseId');
        res.json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching workouts', error });
    }
};

export const createWorkoutSession: RequestHandler = async (req: Request, res: Response) => {
    try {
        const { title, description, exercises } = req.body;
        const userId = (req as any).user._id;

        const newWorkout = new WorkoutSessionModel({ userId, title, description, exercises });
        await newWorkout.save();

        res.status(201).json(newWorkout);
    } catch (error) {
        res.status(500).json({ message: 'Error creating workout session', error });
    }
};

export const updateWorkoutSession = async (req: Request, res: Response) => {
    try {
        const workoutId = req.params.id;
        const userId = (req as any).user._id;

        const updated = await WorkoutSessionModel.findOneAndUpdate(
            { _id: workoutId, userId },
            { $set: req.body },
            { new: true }
        ).populate('exercises.exerciseId');

        if (!updated) return res.status(404).json({ message: 'Workout session not found' });

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating workout session', error });
    }
};
