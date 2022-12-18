import { FunctionComponent, lazy, useState } from "react";
import { styled } from "@/stitches.config";

import { BsCaretUp } from "react-icons/bs/index.js";
import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Div } from "@/components/utils/Div";

const Pill = lazy(() => import("@/components/Pill"));

const ButtonRoot = styled(Button, {
  width: "100%",
  justifyContent: "space-between",
  textTransform: "capitalize",

  padding: "$spacer-2 $spacer-3",
});

const genres = [
  "Romance De Época",
  "Romance Histórico",
  "Romance",
  "Sobrenatural",
  "New Adult",
  "Fantasia",
  "Chick List",
  "Carta",
  "Conto",
  "Drama",
  "Crônica",
  "Ensaio",
  "Poesia",
];

export const DropdownButton: FunctionComponent<{
  label: string;
  checked: boolean;
  onChecked: () => void;
}> = ({ label }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonRoot
        onClick={() => setOpen((open) => !open)}
        css={{
          background: open ? "$secondaryBase" : "$gray600",
        }}
      >
        <Heading.p font="reading" weight="regular">
          {label}
        </Heading.p>

        <BsCaretUp
          size={12}
          style={{
            transform: `${open ? "rotate(180deg)" : "rotate(90deg)"}`,
          }}
        />
      </ButtonRoot>

      <Div
        css={{
          width: "100%",
          display: open ? "flex" : "none",
          flexDirection: "column",
          overflow: "auto",
          gap: "$spacer-1",
        }}
      >
        <Div
          css={{
            width: "100%",

            display: "flex",
            alignItems: "center",
            gap: "$spacer-1",
          }}
        >
          {genres
            .slice(0, Math.floor(genres.length / 2))
            .map((genre, index) => (
              <Pill asButton key={genre} genre={genre}>
                {genre}
              </Pill>
            ))}
        </Div>

        <Div css={{ display: "flex", gap: "$spacer-1" }}>
          {genres.slice(Math.floor(genres.length / 2)).map((genre, index) => (
            <Pill asButton key={genre} genre={genre}>
              {genre}
            </Pill>
          ))}
        </Div>
      </Div>
    </>
  );
};
