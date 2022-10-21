import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  media: {
    tablet: "(min-width: 48rem)",
    desktop: "(min-width: 63.688rem)",
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
      tablet: "48rem",
      desktop: "63.688rem",
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
    flexCenter: (value: string) => ({
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

export const globalStyles = globalCss({
  // * Additionals Resets
  a: {
    textDecoration: "",
    color: "black",
    fill: "black",
  },

  "a:visited": {
    color: "black",
  },

  svg: {
    color: "inherit",
    fill: "hsl(240, 70%, 60%)",
  },

  /* Set core body defaults */
  body: {
    display: "none",
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: "1.5",
    // * Project Adjustments
    backgroundColor: "hsl(240, 10%, 85%)",
  },

  /* Box sizing rules */
  "*, *::before, *::after": {
    boxSizing: "border-box",
    /* Additional rules */
    margin: "0",
    padding: "0",
  },

  /* Remove default margin */
  "body, h1, h2, h3, h4, p, figure, blockquote, dl, dd": {
    margin: "0",
  },

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  "ul[role='list'], ol[role='list']": {
    listStyle: "none",
  },

  /* Set core root defaults */
  "html:focus-within": {
    scrollBehavior: "smooth",
  },

  /* A elements that don't have a class get default styles */
  "a:not([class])": {
    textDecorationSkipInk: "auto",
  },

  /* Make images easier to work with */
  "img, picture": {
    maxWidth: "100%",
    display: "block",
  },

  /* Inherit fonts for inputs and buttons */
  "input, button, textarea, select": {
    font: "inherit",
  },

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  "@media (prefers-reduced-motion: reduce)": {
    "html:focus-within": {
      scrollBehavior: "auto",
    },

    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
});
