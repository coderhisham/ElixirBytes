import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true },
    githubUrl: String,
    linkedinUrl: String,
    background: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      required: true,
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const MentorshipForm =
  mongoose.models.MentorshipForm || mongoose.model("MentorshipForm", schema);
