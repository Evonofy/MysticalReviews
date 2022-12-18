import { FunctionComponent, ReactNode } from "react";
import { styled, config } from "@/stitches.config";

import { Heading } from "./Heading";
import { CSS } from "@stitches/react";

const TitleRoot = styled(Heading.h1, {
  fontWeight: "$regular",

  "&:after": {
    content: "",
    display: "block",

    width: "var(--border-width)",
    height: "var(--border-height)",

    background: "$accentBase",

    "--border-width": "120px",
    "--border-height": "5px",
    borderRadius: "$brXm",

    "@tablet": {
      "--border-width": "200px",
      "--border-height": "5px",
    },

    "@desktop": {
      "--border-width": "470px",
      "--border-height": "10px",
      borderRadius: "$brMd",
    },
  },
});

export const Title: FunctionComponent<{
  children: ReactNode;
  css?: CSS<typeof config>;
}> = ({ children, css }) => {
  return <TitleRoot css={css}>{children}</TitleRoot>;
};
