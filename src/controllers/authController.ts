import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/UserModel';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already in use' });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ _id: uuidv4(), name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { sub: user._id },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );

        res.json({
            token,
            id: user._id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
