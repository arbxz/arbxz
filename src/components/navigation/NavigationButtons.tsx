"use client";

import LocaleSwitch from "../LocaleSwitch";
import ThemeToggle from "../ui-elements/ThemeToggle";
const NavigationButtons = () => {
  return (
    <div className="flex gap-4 items-center">
      <LocaleSwitch />
      <ThemeToggle />
    </div>
  );
};

export default NavigationButtons;
