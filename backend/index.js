import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

import authRoutes from "./routes/auth.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

app.use("/api/auth", authRoutes);

//Global error handler
app.use(errorHandler);
export default app;
