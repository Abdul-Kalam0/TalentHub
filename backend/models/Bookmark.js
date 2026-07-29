import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  },
);

bookmarkSchema.index(
  {
    applicant: 1,
    job: 1,
  },
  {
    unique: true,
  },
);

const BookmarkModel = mongoose.model("Bookmark", bookmarkSchema);

export default BookmarkModel;
