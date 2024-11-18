import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 p-4">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold">
          <div className="inline-block animate-bounce">🥲</div> Not Found
        </h1>
        <p className="mb-8 block">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          className="inline-flex items-center gap-4 rounded-full border-2 border-foreground px-4 py-2"
          href="/"
        >
          🙇‍♂️ Please return to arbxz.dev
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
