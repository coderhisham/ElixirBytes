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
    gitHubUrl: "https://github.com/coderhisham/SmartIndiaMapping",
    videoUrl: "https://drive.google.com/file/d/11-obJKZzT55jKVLjdvxXbYges9B5dcsS/view?usp=drive_link",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12303350",
    name: "Aiswairya Amrithraj E",
    linkedInUrl: "https://www.linkedin.com/posts/aiswarya-amrithraj-e_smartindiamapping-innovationforindia-geospatialtech-activity-7321439674319659008-9hmN?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADN88HEBAy0PJXI_RSiwOpEQTvRMtcNjVg0&utm_campaign=whatsapp",
    gitHubUrl: "https://github.com/aiswaryaamrithraj/SmartIndiaMapping_final",
    videoUrl: "https://drive.google.com/file/d/11-obJKZzT55jKVLjdvxXbYges9B5dcsS/view?usp=drive_link",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12319689",
    name: "Rasin Haris PK",
    linkedInUrl: "https://www.linkedin.com/posts/rasinharispk_smartindiamapping-geospatial-techforgood-activity-7320266923340980224-mkgq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELmZ0kBbxYj5kdkhBz6U_fE9bRAu_XcIcE",
    gitHubUrl: "https://github.com/Rasinharis/SmartIndiaMapping",
    videoUrl: "https://drive.google.com/file/d/11-obJKZzT55jKVLjdvxXbYges9B5dcsS/view?usp=drive_link",
    projectDemoUrl: "https://coderhisham.com",
  },
  {
    regNo: "12320175",
    name: "Vinay Kumar",
    linkedInUrl: "https://www.linkedin.com/posts/vinay-kumar-b07a1a28a_smartindiamapping-digitalindia-techforgood-activity-7319702524775514112-IqSn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELmZ0kBbxYj5kdkhBz6U_fE9bRAu_XcIcE",
    gitHubUrl: "https://github.com/Vinay15383951/SmartIndiaMapping",
    videoUrl: "https://drive.google.com/file/d/11-obJKZzT55jKVLjdvxXbYges9B5dcsS/view?usp=drive_link",
    projectDemoUrl: "https://coderhisham.com",
  },
];

export function getUserByName(regNo: string): UserData | undefined {
  return usersData.find((user) => user.regNo === regNo);
}
