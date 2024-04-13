import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import rooms from "./routes/rooms.js";
import hotels from "./routes/hotels.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
//this is my comment
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB")
    } catch (error) {
        throw error;
    }
};
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/hotels", hotels);
app.use("/api/rooms", rooms);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(5000, () => {
    connect();
    console.log("server start at port no 5000");
})
