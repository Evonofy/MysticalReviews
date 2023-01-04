import { FunctionComponent, ReactNode } from "react";
import { styled } from "@/stitches.config";

import { slugify } from "@/slugify";
import Link from "next/link";

const PillRoot = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacer-1 $spacer-4",
  borderRadius: "$brLg",
  flexShrink: "0",
  cursor: "pointer",

  border: "2px solid transparent",

  "&:focus": {
    border: "2px solid transparent",
  },

  "&:hover": {
    filter: "opacity(50%)",
  },
});

type PillProps = {
  asButton?: boolean;
  onClick?: () => void;
  selected?: boolean;

  name: string;
  color: string;
  backgroundColor: string;
};

export const Pill: FunctionComponent<PillProps> = ({
  asButton = false,
  onClick,
  selected = false,
  color,
  backgroundColor,
  name,
}) => {
  return (
    <PillRoot
      as={asButton ? "button" : Link}
      onClick={onClick}
      href={`/category/${slugify(name)}`}
      css={
        selected
          ? {
              color: backgroundColor,
              backgroundColor: color,
              borderColor: color,
            }
          : {
              color,
              backgroundColor,

              "&:focus": {
                borderColor: color,
              },
            }
      }
    >
      {name}
    </PillRoot>
  );
};

// for lazy purposes
export default Pill;
