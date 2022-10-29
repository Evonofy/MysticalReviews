import { FunctionComponent, useState, lazy, Suspense } from "react";
import { styled } from "@/stitches.config";

import { BsCaretUp } from "react-icons/bs/index.js";
import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Div } from "@/components/utils/div";
import { slugify } from "@/slugify";

const Pill = lazy(() => import("@/components/pill"));

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

      {open ? (
        <Div css={{ display: "flex", flexWrap: "wrap", gap: "$spacer-1" }}>
          <Suspense fallback={"carregando..."}>
            {genres.length / 2}
            {genres.map((genre, index) => (
              <Pill key={genre} index={index} href={`/${slugify(genre)}`}>
                {genre}
              </Pill>
            ))}
          </Suspense>
        </Div>
      ) : null}
    </>
  );
};
