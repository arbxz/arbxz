import { Metadata } from "next";

import Container from "@/components/shared/Container";

import PageContent from "./pageContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arbxz.com"),
  title: "arbxz | Admin Dashboard",
  description: "Admin dashboard created from NextJs",
  authors: {
    name: "Arbaaz Mowlabucus",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.arbxz.com/design-system",
    title: "Arbaaz Mowlabucus | Frontend Engineer",
    description:
      "Check out my portfolio and professional skills I gathered throughout my career.",
    images: {
      url: "/public/logo-large.webp",
      alt: "Logo of my brand",
    },
    siteName: "Arbaz Mowlabucus | Frontend Engineer",
  },
  keywords: [
    "Arbaaz Mowlabucus",
    "ReactJs Developer",
    "NextJs Developer",
    "JavaScript",
    "Web Developer",
    "Front-end Developer",
    "UI/UX",
    "Portfolio",
  ],
  icons: "/public/logo-large.webp",
  robots: "index, follow",
};

function Dashboard() {
  return (
    <Container>
      <PageContent />
    </Container>
  );
}

export default Dashboard;
