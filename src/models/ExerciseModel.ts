import mongoose, { Document, Schema } from 'mongoose';

export interface IExercise extends Document {
    userId: string;
    name: string;
    category?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

const ExerciseSchema = new Schema<IExercise>(
    {
        _id: { type: String, auto: true },
        userId: { type: String, required: true },
        name: { type: String, required: true },
        category: { type: String },
        description: { type: String }
    },
    { timestamps: true, versionKey: false }
);

export const ExerciseModel = mongoose.model<IExercise>('Exercise', ExerciseSchema);