import { FunctionComponent, ReactNode } from "react";
import { styled } from "@/stitches.config";

import { Heading } from "./Heading";

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

export const Title: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <TitleRoot>{children}</TitleRoot>;
};
