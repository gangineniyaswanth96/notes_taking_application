import dotenv from "dotenv";
dotenv.config();

import mongoose, { connect } from "mongoose";
import { connectDB } from "./config/db.js";

import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors';

console.log(process.env.MONGO_URI);

const app=express();
const PORT=process.env.PORT || 5001;

//connectDB();

//middleware
app.use(cors({
    origin: 'http://localhost:5173', 
}));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes",notesRoutes);


connectDB().then(() => {
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
});