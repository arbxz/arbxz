import React from "react";

import type { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arbxz.com"),
  title: "arbxz | Dev Blog",
  description:
    "Arbaaz Mowlabucus's development blog covering various programming topics.",
  authors: {
    name: "Arbaaz Mowlabucus",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.arbxz.dev/",
    title: "Arbaaz Mowlabucus | Dev Blog",
    description:
      "Explore my development blog where I share insights and tutorials on programming.",
    siteName: "Arbaz Mowlabucus | Dev Blog",
  },
  keywords: [
    "Arbaaz Mowlabucus",
    "Dev Blog",
    "Programming",
    "JavaScript",
    "Web Development",
    "Frontend",
    "Backend",
    "ReactJs",
    "NextJs",
    "Coding",
    "Tutorials",
  ],
  robots: "index, follow",
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return <>{children}</>;
}

export default RootLayout;
