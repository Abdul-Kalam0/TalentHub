import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    photo: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    experience: {
      type: String,
      enum: ["Fresher", "0-1 Years", "1-3 Years", "3-5 Years", "5+ Years"],
      required: true,
    },

    education: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    resume: {
      type: String,
      default: "",
    },

    currentLocation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const ApplicantModel = mongoose.model("Applicant", applicantSchema);

export default ApplicantModel;
