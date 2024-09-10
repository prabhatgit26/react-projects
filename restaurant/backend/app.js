// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { errorMiddleware } from "./error/error.js";
// import reservationRouter from "./routes/reservationRoute.js";

// dotenv.config();

// const app = express();


// app.use(cors({
//     origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Fallback for development
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
// }));


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect("mongodb://localhost:27017/RESTAURANT")
// .then(()=>{
//     app.use('/api/v1/reservation', reservationRouter);
//     app.listen(process.env.PORT || 4000, () => {
//         console.log(`\nServer Started at http://localhost:${process.env.PORT || 4000}`);
//         console.log("\nDatabase Connected.");
//     });
// }).catch(err=>{
//     console.log(err);
//     console.log("\nDatabase Connection Failed.");
// });

// // Place the error middleware after all routes
// app.use(errorMiddleware);

// export default app;



import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { errorMiddleware } from './error/error.js'; // Ensure the path is correct
import reservationRouter from './routes/reservationRoute.js'; // Ensure the path is correct

dotenv.config();

const app = express();

// Configure CORS to allow requests from the frontend
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Fallback for development
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    credentials: true, // Allow credentials (cookies, authorization headers)
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/RESTAURANT', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("\nDatabase Connected.");
    // Register routes after a successful database connection
    app.use('/api/v1/reservation', reservationRouter);

    // Start the server
    app.listen(process.env.PORT || 4000, () => {
        console.log(`\nServer Started at http://localhost:${process.env.PORT || 4000}`);
    });
})
.catch(err => {
    console.error(err); // Log the error
    console.error("\nDatabase Connection Failed.");
});

// Place the error middleware after all routes and middleware
app.use(errorMiddleware);

export default app;
