import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getUserByName } from "@/data/projData";
import {
  PlaySquare,
  Linkedin,
  ExternalLink,
  Sparkles,
  Github,
} from "lucide-react";
import Link from "next/link";

// Make this a server component with async handling
export default async function ProjectPage({
  params,
}: {
  params: { regno: string };
}) {
  // Extract regno from params
  const { regno } = params;
  const userData = getUserByName(regno);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 flex flex-col justify-between">
      <div className="flex items-center justify-center flex-1">
        <div className="w-full max-w-4xl">
          <Card className="w-full bg-zinc-900 border-zinc-800 shadow-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(60,60,70,0.5)] hover:border-zinc-700">
            <CardHeader className="border-b border-zinc-800">
              <div>
                <CardTitle className="text-4xl font-medium flex items-center justify-between text-white">
                  <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    {userData?.name || "Not Found"}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-base font-normal py-1.5 text-white border-zinc-700 hover:bg-zinc-800 transition-colors duration-200"
                  >
                    {userData?.regNo || "Not Found"}
                  </Badge>
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="flex flex-col space-y-5">
                <div>
                  <Button
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-8 text-xl font-medium flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(39,39,42,0.8)] hover:-translate-y-1 group w-full"
                    asChild={!!userData?.gitHubUrl}
                  >
                    {userData?.gitHubUrl ? (
                      <Link
                        href={userData.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Code
                      </Link>
                    ) : (
                      <>
                        <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Code
                      </>
                    )}
                  </Button>
                </div>

                <div>
                  <Button
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-8 text-xl font-medium flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(39,39,42,0.8)] hover:-translate-y-1 group w-full"
                    asChild={!!userData?.projectDemoUrl}
                  >
                    {userData?.projectDemoUrl ? (
                      <Link
                        href={userData.projectDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <ExternalLink className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Project Demo
                      </Link>
                    ) : (
                      <>
                        <ExternalLink className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Project Demo
                      </>
                    )}
                  </Button>
                </div>

                <div>
                  <Button
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-8 text-xl font-medium flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(39,39,42,0.8)] hover:-translate-y-1 group w-full"
                    asChild={!!userData?.linkedInUrl}
                  >
                    {userData?.linkedInUrl ? (
                      <Link
                        href={userData.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        LinkedIn Post URL
                      </Link>
                    ) : (
                      <>
                        <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        LinkedIn Post URL
                      </>
                    )}
                  </Button>
                </div>

                <div>
                  <Button
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 text-white py-8 text-xl font-medium flex items-center justify-center gap-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(39,39,42,0.8)] hover:-translate-y-1 group w-full"
                    asChild={!!userData?.videoUrl}
                  >
                    {userData?.videoUrl ? (
                      <Link
                        href={userData.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <PlaySquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Video
                      </Link>
                    ) : (
                      <>
                        <PlaySquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        View Video
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-10 text-center text-zinc-500 py-4">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="h-4 w-4" />
          <p className="text-sm">
            Powered by{" "}
            <span className="font-medium text-zinc-300 hover:text-white transition-colors">
              ElixirBytes
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
