import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import { Providers } from "./providers";

import "../themes/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const inter = League_Spartan({
  subsets: ["latin"],
});

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
    images: {
      url: "/public/logo-large.webp",
      alt: "Logo of my brand",
    },
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
  icons: "/public/logo-large.webp",
  robots: "index, follow",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

export default RootLayout;
