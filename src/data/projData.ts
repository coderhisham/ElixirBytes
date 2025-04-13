interface UserData {
  regNo: string;
  name: string;
  linkedInUrl: string;
  gitHubUrl: string;
  videoUrl: string;
  projectDemoUrl: string;
}

export const usersData: UserData[] = [
  {
    regNo: "12310573",
    name: "Muhammed Hisham A",
    linkedInUrl: "https://www.linkedin.com/in/coderhisham/",
    gitHubUrl: "https://www.github.com/coderhisham",
    videoUrl: "https://www.youtube.com/",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12303350",
    name: "Aiswairya Amrithraj E",
    linkedInUrl: "https://www.linkedin.com/in/",
    gitHubUrl: "https://www.github.com/",
    videoUrl: "https://www.youtube.com/",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12319689",
    name: "Rasin Haris PK",
    linkedInUrl: "https://www.linkedin.com/in/",
    gitHubUrl: "https://www.github.com/",
    videoUrl: "https://www.youtube.com/",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12320175",
    name: "Vinay Kumar",
    linkedInUrl: "https://www.linkedin.com/in/",
    gitHubUrl: "https://www.github.com/",
    videoUrl: "https://www.youtube.com/",
    projectDemoUrl: "https://coderhisham.com",
  },
];

export function getUserByName(regNo: string): UserData | undefined {
  return usersData.find((user) => user.regNo === regNo);
}
