import mongoose, { Document, Schema } from 'mongoose';

export interface IWorkoutExercise {
    exerciseId: string;
    sets: number;
    reps: number;
    weight?: number;
    comment?: string;
}

export interface IWorkoutSession extends Document {
    userId: string;
    title: string;
    description?: string;
    exercises: IWorkoutExercise[];
    createdAt: Date;
    updatedAt: Date;
}

const WorkoutExerciseSchema = new Schema<IWorkoutExercise>({
    exerciseId: { type: String, ref: 'Exercise', required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number },
    comment: { type: String }
});

const WorkoutSessionSchema = new Schema<IWorkoutSession>(
    {
        _id: { type: String, auto: true },
        userId: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String },
        exercises: [WorkoutExerciseSchema]
    },
    { timestamps: true }
);

export const WorkoutSessionModel = mongoose.model<IWorkoutSession>('WorkoutSession', WorkoutSessionSchema);
