import Link from "next/link";
import { useTranslations } from "next-intl";

import NavigationButtons from "./NavigationButtons";

const Navigation = () => {
  const t = useTranslations("Nav");

  return (
    <nav className="sticky max-w-5xl top-0 text-foreground w-full md:px-4 md:py-4 transition-all ease-in-out duration-300 z-50 mx-auto">
      <div className="glass flex gap-6 w-full justify-between items-center mx-auto px-4 py-3 md:rounded-xl shadow-sm overflow-hidden">
        <Link
          className="flex items-center text-xl gap-2"
          href="/"
          prefetch={false}>
          <span className="text-arbxz-accent font-semibold">Arbxz</span>
        </Link>

        <div className="hidden text-md md:flex justify-start items-center gap-4 font-semibold">
          {/* <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#aboutme">
            {t("about")}
          </Link> */}
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#projects">
            {t("project")}
          </Link>
          {/* <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#designs">
            {t("design")}
          </Link>
          <Link
            prefetch={false}
            className="relative py-2 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-foreground hover:before:w-full before:transition-all before:duration-300"
            href="#art">
            {t("art")}
          </Link> */}
        </div>

        <NavigationButtons />
      </div>
    </nav>
  );
};

export default Navigation;
