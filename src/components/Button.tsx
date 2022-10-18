import { styled } from "../stitches.config";

export const Button = styled("button", {
  fontSize: "$xs",
  fontFamily: "$default",

  backgroundColor: "$secondaryBase",
  color: "$gray100",

  borderRadius: "$brXm",
  borderWidth: "0",
  padding: "$spacer-2 $spacer-8",

  cursor: "pointer",

  flexCenter: "row",
  gap: "$spacer-1",

  variants: {
    size: {
      tablet: {
        fontSize: "$md",

        borderRadius: "$brSm",
        padding: "$spacer-1 $spacer-8"
      },
      desktop: {
        fontSize: "$xl",

        borderRadius: "$brSm",
        padding: "$spacer-1 $spacer-8"
      }
    }
  },

  "&:hover": {
    filter: "opacity(50%)",
  },
});

