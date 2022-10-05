import express from "express";
import dotenv from "dotenv";
import paymentRouter from "./routes/paymentRouter.js";
import cors from "cors";
dotenv.config({ path: "./config/config.env" });

export const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRouter);

app.get("/api/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);