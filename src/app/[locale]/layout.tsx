import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { Providers } from "../providers";

import "../../themes/styles.css";
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

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();

  return (
    <html suppressHydrationWarning={true} lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="google" content="nositelinkssearchbox" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
