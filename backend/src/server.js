import dotenv from "dotenv";
dotenv.config();

import mongoose, { connect } from "mongoose";
import { connectDB } from "./config/db.js";

import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import rateLimiter from "./middleware/rateLimiter.js";

console.log(process.env.MONGO_URI);

const app=express();
const PORT=process.env.PORT || 5001;

//connectDB();

app.use(express.json());
//middleware

app.use(rateLimiter);

app.use("/api/notes",notesRoutes);


connectDB().then(() => {
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
});