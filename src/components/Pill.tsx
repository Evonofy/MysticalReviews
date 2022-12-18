import { FunctionComponent, ReactNode, useState } from "react";
import { styled } from "@/stitches.config";

import { slugify } from "@/slugify";

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

const hueMap = [0, 30, 60, 90, 180, 210, 240, 270, 330];

const colorMap: Array<{ backgroundColor: string; color: string }> = hueMap.map(
  (hue) => ({
    color: `hsl(${hue}, 60%, 30%)`,
    backgroundColor: `hsl(${hue}, 80%, 90%)`,
  })
);

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

type PillProps = {
  children: ReactNode;
  asButton?: boolean;
  onClick?: () => void;
  genre: string;
  selected?: boolean;
};

export const Pill: FunctionComponent<PillProps> = ({
  children,
  asButton = false,
  onClick,
  genre,
  selected = false,
}) => {
  const [colorIndex] = useState(randomIntFromInterval(0, colorMap.length - 1));
  const { backgroundColor, color } = colorMap.at(colorIndex)!;

  return (
    <PillRoot
      as={asButton ? "button" : "a"}
      onClick={onClick}
      href={`/${slugify(genre)}`}
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
      {children}
    </PillRoot>
  );
};

// for lazy purposes
export default Pill;
