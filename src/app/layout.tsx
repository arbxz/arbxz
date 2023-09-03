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
  title: "arbxz",
  description:
    "Professional portfolio of my frontend projects and illustrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
