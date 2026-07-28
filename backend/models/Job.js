import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recruiter",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    workplaceType: {
      type: String,
      enum: ["Remote", "Hybrid", "On-site"],
      required: true,
    },

    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
      required: true,
    },

    experience: {
      type: String,
      enum: ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
      required: true,
    },

    salary: {
      min: {
        type: Number,
        required: true,
        min: 0,
      },

      max: {
        type: Number,
        required: true,
        min: 0,
      },
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    responsibilities: [
      {
        type: String,
        trim: true,
      },
    ],

    requirements: [
      {
        type: String,
        trim: true,
      },
    ],

    openings: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  {
    timestamps: true,
  },
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
