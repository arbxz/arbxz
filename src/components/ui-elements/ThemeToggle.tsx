import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

import { useLoaded } from "@/hooks/useLoaded";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const loaded = useLoaded();
  return (
    <button
      type="button"
      title="Theme toggle"
      className="flex items-center justify-center p-2 text-xl rounded-full text-foreground"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme == "light" && loaded ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  );
};

export default ThemeToggle;
