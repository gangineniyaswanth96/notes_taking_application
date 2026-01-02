import mongoose from 'mongoose';

export default async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://Yaswanth:Yaswanth%401234@cluster0.m7zavlx.mongodb.net/notes_db?appName=Cluster0")
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("MongoDB connection failed:",error);
        process.exit(1);
    }
};