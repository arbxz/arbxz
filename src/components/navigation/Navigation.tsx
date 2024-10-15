import Link from "next/link";

import NavigationButtons from "./NavigationButtons";

const Navigation = () => {
  return (
    <nav className="sticky max-w-5xl top-0 text-foreground w-full md:px-4 md:py-4 transition-all ease-in-out duration-300 z-50 mx-auto">
      <div className="glass flex gap-6 w-full justify-start items-center mx-auto px-4 py-3 md:rounded-xl shadow-sm overflow-hidden">
        <Link
          className="flex items-center text-xl gap-2"
          href="/"
          prefetch={false}>
          <span className="text-arbxz-accent font-semibold">Arbxz</span>
        </Link>

        <Link
          href="/blog"
          className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300">
          blog.
        </Link>

        <NavigationButtons />
      </div>
    </nav>
  );
};

export default Navigation;
