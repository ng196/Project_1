import express from "express";
import mongoose from "mongoose";
import productRouter from "./routes/product.router.js";
import dotenv from 'dotenv' ; 
import process from "process";


const app = express();
const PORT = 5000;

dotenv.config(); 

// Middleware
app.use(express.json());

// Routes
app.use("/api/products", productRouter);

// MongoDB Connection
const DB_URL = "mongodb+srv://nitingoyal9696:xtoTZ6BpU7pTcHqU@cluster0.h8kpv.mongodb.net/products?retryWrites=true&w=majority";

mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB successfully");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit the process if the connection fails
    });


// xtoTZ6BpU7pTcHqU