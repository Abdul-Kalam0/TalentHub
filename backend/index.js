import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(
  cors({
    // origin: "http://localhost:5173/",
    origin: "https://talent-hub-001.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

import authRoutes from "./routes/auth.routes.js";
import recruiterRoutes from "./routes/recruiter.routes.js";
import applicantRoutes from "./routes/applicant.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

app.get("/", (req, res) => {
  res.send("<h1>Backend running successfully</h1>");
});

//Auth
app.use("/api", authRoutes);

//Recruiter
app.use("/api", recruiterRoutes);

//Applicant
app.use("/api", applicantRoutes);

//Job
app.use("/api", jobRoutes);

//Application
app.use("/api", applicationRoutes);

//Dashboard
app.use("/api", dashboardRoutes);

//Bookmark
app.use("/api", bookmarkRoutes);

//Global error handler
app.use(errorHandler);
export default app;
