export enum ColorKey {
  primaryTextColor = "primaryTextColor",
  secondaryTextColor = "secondaryTextColor",
  disabledTextColor = "disabledTextColor",
  warningTextColor = "warningTextColor",
  errorTextColor = "errorTextColor",
  primaryColor = "primaryColor",
  secondaryColor = "secondaryColor",
  disabledColor = "disabledColor",
  warningColor = "warningColor",
  errorColor = "errorColor",
}

export interface DefaultThemeProps {
  colors: any;
}

const colors: any = {};
colors[ColorKey.primaryTextColor] = "#333333";

const defaultTheme: DefaultThemeProps = {
  colors,
};

export default defaultTheme;

export enum FontSize {
  xxs = "1rem",
  xs = "1.2rem",
  sm = "1.4rem",
  md = "1.6rem",
  lg = "1.8rem",
  xl = "2.0rem",
}

export enum FontWeight {
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
}

export enum IconSize {
  xxs = "1.0rem",
  xs = "1.4rem",
  sm = "1.6rem",
  md = "1.8rem",
  lg = "2.0rem",
  xl = "2.4rem",
  xxl = "3.0rem",
  xxxl = "3.4rem",
}

export enum BorderRadius {
  default = "10px",
  round = "50px",
  icon = "5px",
}

export enum Spacing {
  none = "0",
  xxs = "0.5rem",
  xs = "1rem",
  sm = "1.5rem",
  md = "2rem",
  lg = "2.5rem",
  xl = "3rem",
  auto = "auto",
}

export enum Breakpoint {
  navigationPhone = "60rem",
  navigationTablet = "90rem",
  forPhoneOnly = "max-width: 37.5em",
  forTabletPortraitDown = "max-width: 56.25em",
  forTabletLandscapeDown = "max-width: 75em",
  forDesktopDown = "max-width: 112.5em",
  forBigDesktopUp = "min-width: 112.5625em",
}
