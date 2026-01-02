import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';

const app=express();

connectDB();

app.use("/api/notes",notesRoutes);

app.listen(5001,()=>{
    console.log("Server is running on port 5001");
});

// mongodb+srv://Yaswanth:Yaswanth@1234@cluster0.m7zavlx.mongodb.net/?appName=Cluster0