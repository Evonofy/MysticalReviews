import { styled } from "@/stitches.config";
import { FunctionComponent, ReactNode, useEffect } from "react";
import seed from "seedrandom";

type PillProps = {
  children: ReactNode;
  href: string;
  index: number;
};

const PillRoot = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$spacer-1 $spacer-4",
  borderRadius: "$brLg",
  flexShrink: "0",

  // focus ring
  "&:focus-visible": {
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

export const Pill: FunctionComponent<PillProps> = ({
  children,
  href,
  index,
}) => {
  // see how many arrays fit into the number
  if (!colorMap.at(index)) {
    const numOfFits = index / colorMap.length;
    // prettier-ignore
    const selecetedColorPairIndex = index - (colorMap.length * Math.floor(numOfFits));

    const { backgroundColor, color } = colorMap.at(selecetedColorPairIndex)!;

    return (
      <PillRoot
        href={href}
        css={{
          color,
          backgroundColor,
          "&:focus-visible": {
            outlineColor: color,
          },
        }}
      >
        {children}
      </PillRoot>
    );
  }

  const { backgroundColor, color } = colorMap.at(index)!;

  return (
    <PillRoot
      href={href}
      css={{
        "&:focus-visible": {
          outlineColor: color,
        },
        color,
        backgroundColor,
      }}
    >
      {children}
    </PillRoot>
  );
};

// for lazy purposes
export default Pill;
