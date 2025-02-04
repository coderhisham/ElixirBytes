"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { submitMentorshipForm } from "@/actions/mentorshipform.submit";
import { MentorshipFormData } from "@/types/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phoneNo: z.string().length(10, "Invalid phone number"),
  githubUrl: z.string().url("Invalid GitHub URL"),
  linkedinUrl: z.string().url("Invalid LinkedIn URL"),
  background: z.enum(["beginner", "intermediate", "advanced"], {
    required_error: "Please select a background level",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Mentor Info Popup Component
const MentorInfoPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-black border-2 border-green-500 w-full max-w-2xl m-4 p-4 sm:p-6 relative animate-fadeIn min-h-min"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl hover:text-green-400 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
          aria-label="Close info"
        >
          ×
        </button>

        <div className="mt-6 sm:mt-0">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">
            Meet Your Mentor
          </h2>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/ProfilePic.jpeg"
                alt="Mentor"
                width={120}
                height={120}
                className="rounded-full border-2 border-green-500 shadow-lg shadow-green-500/50 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              />
              <h1 className="text-lg font-bold mt-2">Muhammed Hisham A</h1>

              <div className="mt-3 flex items-center space-x-4">
                <Link
                  href="https://aboutme.elixirbytes.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 transform hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/coderhisham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 transform hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/coderhisham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-500 transform hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-500/5 border border-green-500 p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  Professional Experience
                </h3>
                <p className="text-sm text-green-400">
                  Full Stack Developer with experience of building
                  enterprise-level applications, Deploying them and scaling them
                  for performance.
                </p>
              </div>

              <div className="bg-green-500/5 border border-green-500 p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-bold mb-2">
                  Mentoring Approach
                </h3>
                <p className="text-sm text-green-400">
                  Focused on practical, project-based learning with an emphasis
                  on industry best practices. Each mentee receives personalized
                  guidance tailored to their skill level and career goals.
                </p>
              </div>
            </div>

            <div className="bg-green-500/5 border border-green-500 p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-3">
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  "React & Next.js",
                  "Node.js & Nest.js",
                  "AWS Cloud",
                  "MongoDB & SQL",
                  "Docker",
                  "Kubernetes",
                  "CI/CD & DevOps",
                  "Linux & Git",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-green-500/10 flex items-center justify-center border border-green-500 rounded px-3 py-2 text-xs sm:text-sm text-center text-green-400"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-500/5 border border-green-500 p-4 rounded-lg">
              <h3 className="text-base sm:text-lg font-bold mb-3">
                Mentorship Style
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "👥 Weekly Meetings",
                  "💻 Code Reviews",
                  "🚀 Project Guidance",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-500/10 border border-green-500 rounded px-3 py-2 text-xs sm:text-sm text-center text-green-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Popup Form Component
const PopupForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const initialFormState = {
    name: "",
    email: "",
    phoneNo: "",
    githubUrl: "",
    linkedinUrl: "",
    background: "" as "beginner" | "intermediate" | "advanced" | "",
    message: "",
  };

  const [formData, setFormData] =
    useState<MentorshipFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      formSchema.parse(formData);
      const response = await submitMentorshipForm(formData);
      if (response.success) {
        setFormData(initialFormState);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 2000);
      } else {
        setErrors(response.error as unknown as { [key: string]: string });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {showSuccess ? (
        <div className="bg-green-500/10 border-2 border-green-500 p-6 rounded-lg animate-fadeIn flex flex-col justify-center items-center">
          <h3 className="text-xl font-bold text-green-400 mb-2">
            Successfully Submitted!
          </h3>
          <p className="text-green-300">Thank you for your application.</p>
        </div>
      ) : (
        <div
          className="bg-black border-2 border-green-500 w-full max-w-md p-6 relative animate-fadeIn"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl hover:text-green-400"
            aria-label="Close form"
          >
            ×
          </button>

          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Apply for Mentorship
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="popup-name" className="block mb-1 text-sm">
                Name
              </label>
              <input
                id="popup-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent border ${
                  errors.name ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="popup-email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                id="popup-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border ${
                  errors.email ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="popup-phone" className="block mb-1 text-sm">
                Phone Number
              </label>
              <input
                id="popup-phone"
                name="phoneNo"
                type="text"
                value={formData.phoneNo}
                onChange={handleChange}
                className={`w-full bg-transparent border ${
                  errors.phoneNo ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.phoneNo && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNo}</p>
              )}
            </div>

            <div>
              <label htmlFor="popup-github" className="block mb-1 text-sm">
                GitHub URL
              </label>
              <input
                id="popup-github"
                name="githubUrl"
                type="text"
                value={formData.githubUrl}
                onChange={handleChange}
                className={`w-full bg-transparent border ${
                  errors.githubUrl ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.githubUrl && (
                <p className="text-red-500 text-xs mt-1">{errors.githubUrl}</p>
              )}
            </div>

            <div>
              <label htmlFor="popup-linkedin" className="block mb-1 text-sm">
                LinkedIn URL
              </label>
              <input
                id="popup-linkedin"
                name="linkedinUrl"
                type="text"
                value={formData.linkedinUrl}
                onChange={handleChange}
                className={`w-full bg-transparent border ${
                  errors.linkedinUrl ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.linkedinUrl && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.linkedinUrl}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="popup-background" className="block mb-1 text-sm">
                Programming Background
              </label>
              <select
                id="popup-background"
                name="background"
                value={formData.background}
                onChange={handleChange}
                className={`w-full bg-black border ${
                  errors.background ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.background && (
                <p className="text-red-500 text-xs mt-1">
                  {"Invalid background level"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="popup-message" className="block mb-1 text-sm">
                Why do you want to join?
              </label>
              <textarea
                id="popup-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full bg-transparent border ${
                  errors.message ? "border-red-500" : "border-green-500"
                } p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-2 border-green-500 py-2 text-sm hover:bg-green-500 hover:text-black transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

// Main Page Component
export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMentorInfoOpen, setIsMentorInfoOpen] = useState(false);

  const topics = [
    {
      title: "Version Control Mastery",
      description: "Git, GitHub, and collaborative development workflows",
      icon: "🔄",
    },
    {
      title: "Container Orchestration",
      description: "Docker, Kubernetes, and deployment strategies",
      icon: "🐳",
    },
    {
      title: "Scalable Architecture",
      description: "Building and scaling web applications for performance",
      icon: "📈",
    },
    {
      title: "Full Stack Development",
      description: "Frontend, Backend, and Database integration",
      icon: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono">
      <Head>
        <title>Full Stack Mentorship Program</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join our intensive full stack web development mentorship program"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="border-b border-green-500 sticky top-0 bg-black/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-14 md:h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-lg md:text-xl font-bold">&lt;FSM/&gt;</span>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="text-green-500 hover:text-green-400 text-2xl p-2"
                aria-label="Toggle menu"
              >
                {showMenu ? "×" : "≡"}
              </button>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Curriculum", "Apply"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-400 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-black border-b border-green-500 transition-all duration-300 ease-in-out ${
            showMenu
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            {["Home", "About", "Curriculum", "Apply"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-green-400 py-3 px-2 text-sm"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-4 py-8 md:py-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 px-2">
              <span className="typing-animation">Full Stack Mentorship_</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              {"{"} status: &quot;accepting_applications&quot; {"}"}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <button
                onClick={() => setIsMentorInfoOpen(true)}
                className="border-2 border-green-500 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
              >
                <span>👨‍🏫</span>
                Meet Your Mentor
              </button>
              <button
                onClick={() => setIsFormOpen(true)}
                className="border-2 border-green-500 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base hover:bg-green-500 hover:text-black transition-colors flex items-center gap-2"
              >
                <span>✍️</span>
                Join the Program
              </button>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section
          id="curriculum"
          className="max-w-7xl mx-auto px-4 py-8 md:py-16 border-t border-green-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="border border-green-500 p-4 md:p-6 hover:bg-green-500/10 transition-colors"
              >
                <div className="text-xl md:text-2xl mb-2">{topic.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  {topic.title}
                </h3>
                <p className="text-green-400 text-sm md:text-base">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-500 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm md:text-base">
          <p>&lt;/&gt; with 💚 by your mentor</p>
        </div>
      </footer>

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <MentorInfoPopup
        isOpen={isMentorInfoOpen}
        onClose={() => setIsMentorInfoOpen(false)}
      />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typing-animation {
          display: inline-block;
          overflow: hidden;
          border-right: 0.15em solid #22c55e;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #22c55e;
          }
        }

        @media (max-width: 640px) {
          .typing-animation {
            white-space: normal;
            border-right: none;
            animation: none;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        html {
          scroll-behavior: smooth;
          -webkit-tap-highlight-color: transparent;
        }

        body.modal-open {
          overflow: hidden;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
