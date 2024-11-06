import type { Metadata } from "next";

import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arbxz.com"),
  title: "arbxz | Arbaaz Mowlabucus",
  description:
    "Arbaaz Mowlabucus's professional portfolio of frontend projects and illustrations.",
  authors: {
    name: "Arbaaz Mowlabucus",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.arbxz.com/",
    title: "Arbaaz Mowlabucus | Frontend Engineer",
    description:
      "Check out my portfolio and professional skills I gathered throughout my career.",

    siteName: "Arbaz Mowlabucus | Frontend Engineer",
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
  ],
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
      <Navigation />
      <main className="relative flex-1 text-stone-800 dark:text-foreground ">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
