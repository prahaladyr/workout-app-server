import { Request, Response } from 'express';
import { ExerciseModel } from '../models/ExerciseModel';

export const getExercises = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user._id;
        const exercises = await ExerciseModel.find({ userId });

        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercises', error });
    }
};

export const createExercise = async (req: Request, res: Response) => {
    try {
        const { name, category, description } = req.body;
        const userId = (req as any).user._id;

        const newExercise = new ExerciseModel({ userId, name, category, description });
        await newExercise.save();

        res.status(201).json(newExercise);
    } catch (error) {
        res.status(500).json({ message: 'Error creating exercise', error });
    }
};

export const updateExercise = async (req: Request, res: Response) => {
    try {
        const exerciseId = req.params.id;
        const userId = (req as any).user._id;

        const updated = await ExerciseModel.findOneAndUpdate(
            { _id: exerciseId, userId },
            { $set: req.body },
            { new: true }
        );

        if (!updated) return res.status(404).json({ message: 'Exercise not found' });

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error updating exercise', error });
    }
};

export const getExerciseForUser = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user._id;

        const exercises = await ExerciseModel.find({
            userId: { $in: [userId, 'all'] }
        });

        res.json(exercises);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercises', error });
    }
};
