export type MentorshipFormData = {
  name: string;
  email: string;
  phoneNo: string;
  githubUrl: string;
  linkedinUrl: string;
  background: "beginner" | "intermediate" | "advanced" | "";
  message: string;
};
