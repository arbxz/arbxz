import Link from "next/link";

import ThemeToggle from "@/components/ui-elements/ThemeToggle";

interface NavigationContentProps {
  isBlog: boolean;
}

const NavigationContent = ({ isBlog }: NavigationContentProps) => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 max-w-5xl xl:max-w-6xl top-0 w-full md:px-4 md:py-4 transition-all ease-in-out duration-300 z-50 mx-auto">
      <div className="glass flex gap-6 w-full justify-start items-center mx-auto px-4 py-3 md:rounded-xl shadow-sm overflow-hidden">
        <Link
          className="flex items-center text-xl gap-2"
          href="/"
          prefetch={false}>
          <small
            className={` ${isBlog ? "border-blue-600 text-blue-500" : "border-arbxz-accent bg-arbxz-accent dark:bg-transparent text-white"} text-sm rounded-full px-4 py-1 border-2 font-semibold transition-colors duration-300`}>
            Arbxz
          </small>
        </Link>

        <Link
          href="/blog"
          className="relative p-2 hover:-translate-y-2 transition-all duration-300">
          blog.
        </Link>

        <div className="flex gap-4 items-center ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavigationContent;
