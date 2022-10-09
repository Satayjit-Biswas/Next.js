import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";

//router
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

//port
const PORT = process.env.PORT || 8000;

//database connection
const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("connected to DB");
        })
        .catch((error) => {
            throw error;
        });
};

// if the database has been disconnected
mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
});

//middleware
const corsOptions = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

//all route
app.get("/", (req, res) => {
    res.send("WellCome to Server Side");
});
//auth route
app.use("/api/auth", authRoutes);

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something Went worng";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

//listen
app.listen(PORT, () => {
    connect();
    console.log("Connected to Server");
});
