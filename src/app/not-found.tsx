import { Home, StepBackIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body className="p-4 flex justify-center items-center gap-8 bg-primary text-foreground w-full h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Not Found</h1>
          <p className="block mb-8">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            className="inline-flex items-center gap-4 border-2 border-foreground rounded-full px-4 py-2"
            href="/">
            <Home /> arbxz.dev
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
