import { createStitches } from "@stitches/react";

export const { styled, config } = createStitches({
  media: {
    mobile: "(max-width: 768px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1024px)",
  },
  theme: {
    colors: {
      accentLight: "hsl(185, 100%, 70%)",
      accentBase: "hsl(185, 100%, 35%)",
      accentDark: "hsl(185, 60%, 50%)",
      accentDarkest: "hsl(185, 45%, 20%)",
      secondaryLight: "hsl(240, 100%, 70%)",
      secondaryBase: "hsl(240, 70%, 60%)",
      secondaryDark: "hsl(240, 50%, 50%)",
      secondaryDarkest: "hsl(240, 45%, 20%)",
      gray100: "hsla(0, 0%, 100%, 1)",
      gray200: "hsla(0, 0%, 85%, 1)",
      gray300: "hsla(0, 0%, 75%, 1)",
      gray400: "hsla(0, 0%, 65%, 1)",
      gray500: "hsla(0, 0%, 55%, 1)",
      gray600: "hsla(0, 0%, 39%, 1)",
      gray700: "hsla(0, 0%, 28%, 1)",
      gray800: "hsla(0, 0%, 16%, 1)",
      gray900: "hsla(0, 5%, 10%, 1)",
      white: "hsla(0, 0%, 100%, 1)",
      black: "hsla(0, 0%, 0%, 1)",
    },

    fonts: {
      default: "Montserrat, sans-serif",
      display: "Kaushan Script, cursive",
    },

    lineHeights: {
      default: "100%",
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%",
    },
    fontWeights: {
      light: "light",
      regular: "regular",
      medium: "medium",
      bold: "bold",
    },
    borderWidths: {
      thin: "1px",
      hev: "4px",
    },
    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
    },

    space: {
      "spacer-1": "0.25rem",
      "spacer-2": "0.5rem",
      "spacer-3": "0.75rem",
      "spacer-4": "1rem",
      "spacer-5": "1.25rem",
      "spacer-6": "1.5rem",
      "spacer-7": "1.75rem",
      "spacer-8": "2rem",
      "spacer-10": "2.5rem",
      "spacer-11": "2.625",
      "spacer-12": "3rem",
      "spacer-14": "4rem",
    },

    sizes: {
      tablet: "43rem",
      desktop: "68.75 rem",
    },
    shadows: {
      default: "0px 4px 14px rgba(0, 0, 0, 0.1)",
    },
    radii: {
      brXm: "2.5px",
      brSm: "5px",
      brMd: "10px",
      brLg: "20px",
      bwThi: "100px",
      bwMd: "100px",
      bwThc: "100px",
      bwHev: "100px",
    },

    transitions: {
      default: "0",
      faster: "0.1s",
      fast: "0.2s",
      normal: "0.3s",
      slow: "0.4s",
      slower: "0.5s",
    },

    zIndices: {
      default: "1",
      lowest: "10",
      low: "20",
      normal: "30",
      high: "40",
      highest: "50",
    },
  },

  utils: {
    flexCenter: (
      value: "column" | "column-reverse" | "row" | "row-reverse"
    ) => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: value,
    }),

    flexCenterY: () => ({
      display: "flex",
      alignItems: "center",
    }),

    flexCenterX: () => ({
      display: "flex",
      justifyContent: "center",
    }),

    limitWidth: (pixels: string) => ({
      maxWidth: pixels,
      margin: "auto",
    }),
  },
});
