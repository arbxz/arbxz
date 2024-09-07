"use client";

import LocaleSwitch from "../LocaleSwitch";
import ThemeToggle from "../ui-elements/ThemeToggle";
const NavigationButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <ThemeToggle />
      <LocaleSwitch />
    </div>
  );
};

export default NavigationButtons;
