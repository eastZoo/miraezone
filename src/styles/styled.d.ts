import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shadows: {
      popup: string;
      modal: string;
      field: string;
      item: string;
      card: string;
    };

    colors: {
      primary: string;
      secondary: string;
      text: string;
      bg: string;
      muted: string;
      whiteBg: string;
      blackBg: string;
      muted: string;
      red: string;
      whiteGreyText: string;
      grayText: string;

      //admin
      adminBgColor: string;
      adminTextColor: string;
      adminPageBgColor: string;

      // Basic
      white100: string;
      white80: string;
      white60: string;
      white38: string;
      white12: string;
      black100: string;
      black90: string;
      black80: string;
      black70: string;
      black60: string;
      black38: string;
      black30: string;
      black12: string;
      black10: string;
      black8: string;
      black5: string;
      black4: string;
      black2: string;
      gray100: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: (n: number) => string;
  }
}
