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

const h2 = styled("h2", {
  fontSize: "$2xl",

  "@tablet": {},
  "@desktop": {},

  ...setupVariants(),
});

const p = styled("p", {
  fontSize: "$xs",

  ...setupVariants(),
});

export const Heading = {
  h2,
  p,
};
