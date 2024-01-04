import { Metadata } from "next";
import Link from "next/link";

import Card from "@/components/shared/Card";
import Button from "@/components/ui-elements/Button";
import Input from "@/components/ui-elements/Input";

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

function SignIn() {
  return (
    <div className="flex justify-center w-full">
      <Card glass styles="mx-auto">
        <div className="flex flex-col flex-wrap gap-4 justify-center items-center p-4 md:p-8 w-full">
          <h1 className="text-4xl font-bold gradient-text">Sign in.</h1>
          <Input
            id="EmailID"
            name="User email"
            label="Email"
            type="Email"
            errorMessage="Please enter a valid email."
          />
          <Input
            id="PasswordID"
            name="Password"
            label="Password"
            type="Password"
            errorMessage="Password can't be less than 4 characters."
          />
          <Link
            href=""
            className="hover:scale-[1.05] duration-300 transition-transform">
            Forgot your password ?
          </Link>
          <Button intent="primary" text="sign in." />
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
