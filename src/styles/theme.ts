import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  shadows: {
    popup: "0px 2px 10px 0px rgba(0,0,0,0.1)",
    modal: "0px 8px 24px 0px rgba(0,0,0,.14)",
    field: "0px 6px 16px 0px rgba(0,0,0,.06)",
    item: "0px 5px 10px 0px rgba(75,69,231, .12)",
    card: "0px 12px 12px 0px #4B45E74C",
  },
  colors: {
    primary: "#3b82f6",
    secondary: "#10b981",
    text: "#111827",
    bg: "#ffffff",
    muted: "#6b7280",
    whiteBg: "#ffffff",
    blackBg: "#000000",
    red: "#ff4444",

    whiteGreyText: "#999",
    grayText: "#666",

    //admin
    adminBgColor: "#393b3f",
    adminTextColor: "#cccccc",
    adminPageBgColor: "#fafafa",

    // Basic
    white100: "#ffffff",
    white80: "#ffffffcc",
    white60: "#ffffff99",
    white38: "#ffffff61",
    white12: "#ffffff1f",
    black100: "#000000",
    black90: "#000000e6",
    black80: "#000000cc",
    black70: "#000000b3",
    black60: "#00000099",
    black38: "#00000061",
    black30: "#0000004C",
    black12: "#0000001f",
    black10: "#00000019",
    black8: "#00000014",
    black5: "#0000000d",
    black4: "#00000004",
    black2: "#00000005",
    gray100: "#E6E6E6",
  },
  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
  },
  spacing: (n: number) => `${n * 4}px`,
};
