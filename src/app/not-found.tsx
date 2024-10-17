import Link from "next/link";

const NotFound = () => {
  return (
    <div className="p-4 flex justify-center items-center gap-8 w-full h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          <div className="animate-bounce inline-block">🥲</div> Not Found
        </h1>
        <p className="block mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          className="inline-flex items-center gap-4 border-2 border-foreground rounded-full px-4 py-2"
          href="/">
          🙇‍♂️ Please return to arbxz.dev
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
