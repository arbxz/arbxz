import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import "@/themes/styles.css";
import Navigation from "@/components/navigation/Navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = League_Spartan({
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

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

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;