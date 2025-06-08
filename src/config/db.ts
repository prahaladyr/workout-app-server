import mongoose from 'mongoose';

export const DATABASE_NAME = 'workout-app';

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        if (!MONGO_URI) {
            console.error('❌ MONGO_URI is not defined in environment variables');
            process.exit(1);
        }
        console.log('🔗 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI + `/${DATABASE_NAME}`);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
