import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Applicant",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    coverLetter: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },

    status: {
      type: String,
      enum: ["Applied", "Reviewed", "Shortlisted", "Rejected", "Hired"],
      default: "Applied",
    },
  },
  {
    timestamps: true,
  },
);

// One applicant can apply only once to one job
applicationSchema.index(
  {
    applicant: 1,
    job: 1,
  },
  {
    unique: true,
  },
);

const ApplicationModel = mongoose.model("Application", applicationSchema);

export default ApplicationModel;
