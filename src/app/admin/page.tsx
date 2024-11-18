import { Metadata } from "next";

import PageContent from "./pageContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arbxz.com"),
  title: "Admin Dashboard | Arbxz",
  description: "Admin dashboard created from NextJs",
  authors: {
    name: "Arbaaz Mowlabucus",
  },
  keywords: [
    "Arbaaz Mowlabucus",
    "Frontend engineer",
    "ReactJs",
    "NextJs",
    "JavaScript",
    "Web developer",
    "Front-end",
    "developer",
    "UI/UX",
    "Portfolio",
    "admin",
    "admin dashboard",
  ],
};

function Dashboard() {
  return (
    <div className="w-full">
      <PageContent />
    </div>
  );
}

export default Dashboard;
