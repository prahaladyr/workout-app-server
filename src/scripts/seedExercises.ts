import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ExerciseModel } from '../models/ExerciseModel';
import { v7 as uuid } from 'uuid';
import {
    shoulderExerciseDump,
    chestExerciseDump,
    backExerciseDump,
    legExerciseDump,
    armExerciseDump,
    coreExerciseDump,
    cardioExerciseDump,
    flexibilityExerciseDump,
    warmUpExerciseDump,
    coolDownExerciseDump,
    fullBodyExerciseDump,
    plyometricExerciseDump,
    balanceExerciseDump,
    functionalExerciseDump
} from '../dumps/exercisesDump';
import { DATABASE_NAME } from '../config/db';

dotenv.config();

const userId = 'all';

async function seedExercises() {
    await mongoose.connect(process.env.MONGO_URI + `/${DATABASE_NAME}`);
    const shoulderExercises = shoulderExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const chestExercises = chestExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const backExercises = backExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const legExercises = legExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const armExercises = armExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const coreExercises = coreExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const cardioExercises = cardioExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const flexibilityExercises = flexibilityExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const warmUpExercises = warmUpExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const coolDownExercises = coolDownExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const fullBodyExercises = fullBodyExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const plyometricExercises = plyometricExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const balanceExercises = balanceExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const functionalExercises = functionalExerciseDump.map(ex => ({ ...ex, userId, _id: uuid() }));
    const exerciseData = [
        ...shoulderExercises,
        ...chestExercises,
        ...backExercises,
        ...legExercises,
        ...armExercises,
        ...coreExercises,
        ...cardioExercises,
        ...flexibilityExercises,
        ...warmUpExercises,
        ...coolDownExercises,
        ...fullBodyExercises,
        ...plyometricExercises,
        ...balanceExercises,
        ...functionalExercises
    ];
    if (exerciseData.length === 0) {
        console.log('❌ No exercises to seed');
        mongoose.disconnect();
        return;
    }
    console.log(`Seeding ${exerciseData.length} exercises...`);
    // console.log(`Seeding ${exerciseData.length} exercises...`);
    await ExerciseModel.insertMany(exerciseData);
    console.log('✅ Exercises seeded');
    mongoose.disconnect();
}

seedExercises().catch(err => {
    console.error('❌ Failed to seed exercises:', err);
    mongoose.disconnect();
});
