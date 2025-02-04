"use server";

import { connectDb } from "@/lib/dbConnect";
import { MentorshipForm } from "@/lib/models/mentorshipForm";
import { MentorshipFormData } from "@/types/form";
import console from "console";

export async function submitMentorshipForm(formData: MentorshipFormData) {
  try {
    // Connect to DB
    await connectDb();
    await MentorshipForm.create({
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
      githubUrl: formData.githubUrl || "",
      linkedinUrl: formData.linkedinUrl || "",
      background: formData.background,
      message: formData.message,
    });

    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit form",
    };
  }
}
