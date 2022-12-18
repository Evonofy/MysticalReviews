import { FunctionComponent, ReactNode } from "react";
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

  // focus ring
  "&:focus-visible, &:focus": {
    outline: "3px solid transparent",
    outlineOffset: "-3px", // 2 works better than 1 from the design
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
};

export const Pill: FunctionComponent<PillProps> = ({
  children,
  asButton = false,
  onClick,
  genre,
}) => {
  const colorIndex = randomIntFromInterval(0, colorMap.length - 1);
  const { backgroundColor, color } = colorMap.at(colorIndex)!;

  return (
    <PillRoot
      as={asButton ? "button" : "a"}
      onClick={onClick}
      href={`/${slugify(genre)}`}
      css={{
        color,
        backgroundColor,
        "&:focus-visible, &:focus": {
          outlineColor: color,
        },
      }}
    >
      {children}
    </PillRoot>
  );
};

// for lazy purposes
export default Pill;
