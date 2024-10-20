import Link from "next/link";

import ThemeToggle from "@/components/ui-elements/ThemeToggle";

interface NavigationContentProps {
  isBlog: boolean;
}

const NavigationContent = ({ isBlog }: NavigationContentProps) => {
  return (
    <nav className="sticky max-w-5xl top-0 text-foreground w-full md:px-4 md:py-4 transition-all ease-in-out duration-300 z-50 mx-auto">
      <div className="glass flex gap-6 w-full justify-start items-center mx-auto px-4 py-3 md:rounded-xl shadow-sm overflow-hidden">
        <Link
          className="flex items-center text-xl gap-2"
          href="/"
          prefetch={false}>
          <small
            className={` ${isBlog ? "border-green-500 text-green-500" : "border-arbxz-accent text-arbxz-accent"} text-sm rounded-full px-4 py-1 border-2 font-semibold transition-colors duration-300`}>
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
