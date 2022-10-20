// Stitches Config
import { styled } from "../stitches.config";

const Heading1 = styled("h1", {
  fontSize: "$4xl",
  fontFamily: "$default",

  "@tablet": {
    fontSize: "$5xl",
  },
  "@desktop": {
    fontSize: "$6xl",
  },

  variants: {
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Heading2 = styled("h2", {
  fontSize: "$2xl",
  fontFamily: "$default",

  "@tablet": {
    fontSize: "$4xl",
  },
  "@desktop": {
    fontSize: "$6xl",
  },

  variants: {
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Heading3 = styled("h3", {
  fontSize: "$xl",
  fontFamily: "$default",

  "@tablet": {
    fontSize: "$2xl",
  },
  "@desktop": {
    fontSize: "$4xl",
  },

  variants: {
    fontType: {
      display: {
        fontFamily: "$display",
      },
    },
  },
});

const Paragraph = styled("p", {
  fontSize: "$xs",
  fontFamily: "$default",

  "@tablet": {
    fontSize: "$md",
  },
  "@desktop": {
    fontSize: "$xl",
  },
});

const Small = styled("small", {
  fontSize: "$xxs",
  fontFamily: "$default",

  "@tablet": {
    fontSize: "$xs",
  },
  "@desktop": {
    fontSize: "$sm",
  },
});

const Link = styled("a", {
  fontSize: "$xxs",
  fontFamily: "$default",
  cursor: "pointer",

  "@tablet": {
    fontSize: "$xs",
  },
  "@desktop": {
    fontSize: "$xl",
  },

  "&:hover, &:focus": {
    color: "$secondaryBase",
    transition: "all 0.3s",
    transitionTimingFunction: "ease-in-out",

    svg: {
      color: "$secondaryBase",
      transition: "all 0.3s",
      transitionTimingFunction: "ease-in-out",
    },
  },
  "&:visited": {
    color: "inherit",
  },
});

export const Tags = {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Small,
  Link,
};
