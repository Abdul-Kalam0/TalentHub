import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth", authRoutes);

export default app;
