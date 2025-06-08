import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find({}, '-password'); // exclude password field
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
