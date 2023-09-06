import "./themes/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

config.autoAddCss = false;
const inter = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  viewport: { width: "device-width", initialScale: 1 },
  title: "arbxz | Arbaaz Mowlabucus",
  description:
    "Arbaaz Mowlabucus professional portfolio of my frontend projects and illustrations.",
  authors: {
    name: "Arbaaz Mowlabucus",
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.arbxz.com/",
    title: "Arbaaz Mowlabucus",
    description:
      "Check out my portfolio and professional skills I gathered throughout my career.",
    siteName: "Arbxz",
  },
  keywords: [
    "Arbaaz Mowlabucus",
    "React Developer",
    "JavaScript",
    "Web Developer",
    "Front-end Developer",
    "UI/UX",
    "Portfolio",
  ],
  robots: "index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
