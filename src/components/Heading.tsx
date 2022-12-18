import { CSS } from "@stitches/react";
import { styled, config } from "../stitches.config";

const setupVariants = (
  props?: Record<string, Record<string, CSS<typeof config>>>
) => ({
  lineHeight: "$base",
  variants: {
    font: {
      reading: {
        fontFamily: "$default",
      },
      display: {
        fontFamily: "$display",
      },
    },
    weight: {
      medium: {
        fontWeight: "$medium",
      },
      regular: {
        fontWeight: "$regular",
      },
    },
    ...props,
  },
});

const h1 = styled("h1", {
  ...setupVariants(),
  fontSize: "$4xl",
  lineHeight: "$short",

  "@tablet": {
    fontSize: "$5xl",
  },

  "@desktop": {
    fontSize: "$6xl",
  },
});

const h2 = styled("h2", {
  ...setupVariants(),
  fontSize: "$2xl",

  "@tablet": {
    fontSize: "$4xl",
  },

  "@desktop": {
    fontSize: "$5xl",
  },
});

const p = styled("p", {
  ...setupVariants(),
  fontSize: "$sm",

  "@tablet": {
    fontSize: "$md",
  },

  "@desktop": {
    fontSize: "$xl",
  },
});

export const Heading = {
  h1,
  h2,
  p,
};
