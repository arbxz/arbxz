import { Metadata } from "next";

import Box from "@/components/ui-elements/Box";
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

function formView() {
  return (
    <Box>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap gap-2">
          <Button intent="primary" text="Create" /> <br /> <br />
          <Button intent="secondary" text="Update" /> <br /> <br />
          <Button intent="danger" text="Delete" /> <br /> <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Input id="textID" name="Textfield" label="Text field" type="text" />
          <Input
            id="emailID"
            name="Email field"
            label="Email field"
            value="badEmail"
            type="email"
            errorMessage="Enter a valid email address."
          />
          <Input
            id="searchID"
            name="Search field"
            label="Search field"
            type="search"
          />
          <Input
            id="passwordID"
            name="Password field"
            label="Password field"
            type="password"
            value="1234"
          />
          <Input
            id="numberID"
            name="Number field"
            label="Number field"
            type="number"
          />
          <Input id="urlID" name="URL field" label="URL field" type="url" />
        </div>
      </div>
    </Box>
  );
}

export default formView;
