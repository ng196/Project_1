import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Corrected template literal
    } catch (error) {
        console.error(`Error: ${error.message}`); // Corrected template literal
        process.exit(1);
    }
};
