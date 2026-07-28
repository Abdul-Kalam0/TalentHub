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
app.use(express.json());
app.use(cookieParser());

import authRoutes from "./routes/auth.routes.js";
import recruiterRoutes from "./routes/recruiter.routes.js";
import applicantRoutes from "./routes/applicant.routes.js";
import jobRoutes from "./routes/job.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

//Auth
app.use("/api", authRoutes);

//Recruiter
app.use("/api", recruiterRoutes);

//Applicant
app.use("/api", applicantRoutes);

//Job
app.use("/api", jobRoutes);

//Global error handler
app.use(errorHandler);
export default app;
