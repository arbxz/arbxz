const createCssVar = (items: any, prefix = "-"): string[] =>
  Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;
    if (typeof value === "object") {
      return createCssVar(value, varName); // Recursively call createCssVar for nested objects
    }
    return [`${varName}:${value}`]; // Return an array with a single string
  });

export const createCssVars = (themeColors: {
  primary: { text: string; background: string };
}) => createCssVar(themeColors).join(";");

const lightPalette = {
  primary: {
    300: "#A3A4FF",
    400: "#8884FF",
    500: "#6C5EFA",
    600: "#573CFA",
  },
};

export const lightTheme = {
  primary: {
    text: lightPalette.primary[600],
    background: lightPalette.primary[500],
  },
};
