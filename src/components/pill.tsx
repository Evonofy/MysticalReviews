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

  // focus ring
  "&:focus-visible": {
    outline: "2px solid transparent",
    outlineOffset: "-2px", // 2 works better than 1 from the design
  },

  "&:hover": {
    filter: "opacity(50%)",
  },
});

const colorMap: Array<{ backgroundColor: string; color: string }> = [
  {
    color: "#05543D",
    backgroundColor: "#CBF9E1",
  },
  {
    color: "#904827",
    backgroundColor: "#FCF4DB",
  },
  {
    color: "#272790",
    backgroundColor: "#D9D9FC",
  },
  {
    color: "#902727",
    backgroundColor: "#FCDBDB",
  },
];

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
