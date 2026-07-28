import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    companyLogo: {
      type: String,
      default: "",
    },

    website: {
      type: String,
      trim: true,
      default: "",
    },

    companySize: {
      type: String,
      enum: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
      required: true,
    },

    aboutCompany: {
      type: String,
      trim: true,
      maxlength: 1000,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const RecruiterModel = mongoose.model("Recruiter", recruiterSchema);

export default RecruiterModel;
