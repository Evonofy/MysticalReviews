import { styled } from "@/stitches.config";
import { FunctionComponent, useState } from "react";
import { BsTriangle } from "react-icons/bs/index.js";

import { Button } from "@/components/button";
import { Heading } from "./heading";
import { Div } from "./utils/div";
import Pill from "./pill";
import { slugify } from "@/slugify";

type ResenhasProps = {
  variant: "order" | "filter";
  genres?: string[];
};

const Root = styled("div", {
  width: "320px",
  height: "222px",

  borderTopLeftRadius: "$brSm",
  borderTopRightRadius: "$brSm",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-3",

  padding: "$spacer-5",
  paddingBottom: "0",

  background: "$gray100",
});

const Category = styled(Button, {
  width: "100%",
  padding: "$spacer-1 $spacer-2",

  justifyContent: "space-between",

  background: "$gray600",

  '&[data-open="true"]': {
    background: "$secondaryBase",
  },
});

export const Resenhas: FunctionComponent<ResenhasProps> = ({
  variant,
  genres = [],
}) => {
  const [openFilters, setOpenFilters] = useState(false);
  // console.log(genres);
  return (
    <Root>
      {variant === "filter" ? (
        <>
          <Category
            data-open={openFilters}
            onClick={() => setOpenFilters((open) => !open)}
          >
            <Heading.p suppressHydrationWarning font="reading" weight="regular">
              Gênero
            </Heading.p>

            <BsTriangle size={10} strokeWidth={1} />
          </Category>

          <Div css={{ display: "flex", flexWrap: "wrap" }}>
            {openFilters &&
              genres.map((genre, index) => (
                <Pill key={genre} index={index} href={`/${slugify(genre)}`}>
                  {genre}
                </Pill>
              ))}
          </Div>
        </>
      ) : (
        <>
          <h1>dwaDA</h1>
        </>
      )}
    </Root>
  );
};
