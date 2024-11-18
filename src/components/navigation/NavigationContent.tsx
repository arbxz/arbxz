import Link from 'next/link';

import ThemeToggle from '@/components/ui-elements/ThemeToggle';

interface NavigationContentProps {
  isBlog: boolean;
}

const NavigationContent = ({ isBlog }: NavigationContentProps) => {
  return (
    <nav className="fixed left-1/2 top-0 z-50 mx-auto w-full max-w-5xl -translate-x-1/2 transition-all duration-300 ease-in-out md:px-4 md:py-4 xl:max-w-6xl">
      <div className="glass mx-auto flex w-full items-center justify-start gap-6 overflow-hidden px-4 py-3 shadow-sm md:rounded-xl">
        <Link
          className="flex items-center gap-2 text-xl"
          href="/"
          prefetch={false}
        >
          <small
            className={` ${isBlog ? 'border-blue-600 text-blue-500' : 'border-arbxz-accent bg-arbxz-accent text-white dark:bg-transparent'} rounded-full border-2 px-4 py-1 text-sm font-semibold transition-colors duration-300`}
          >
            Arbxz
          </small>
        </Link>

        <Link
          href="/blog"
          className="relative p-2 transition-all duration-300 hover:-translate-y-2"
        >
          blog.
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavigationContent;
