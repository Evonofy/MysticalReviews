import { FunctionComponent, useState } from "react";

import { CardProps } from "../card";
import { Heading } from "../heading";
import { PopupButton } from "./core";

import { styled } from "@/stitches.config";

import { BsCaretUp } from "react-icons/bs/index.js";
import { Button } from "@/components/button";
import { Div } from "@/components/utils/div";

import Pill from "@/components/pill";

const ButtonRoot = styled(Button, {
  width: "100%",
  justifyContent: "space-between",
  textTransform: "capitalize",

  padding: "$spacer-2 $spacer-3",
});

export const FilterPostsPopup: FunctionComponent<{
  cards: CardProps[];
  genres: string[];
  onClick: (sortedCards: CardProps[]) => void;
}> = ({ cards, onClick, genres }) => {
  const [open, setOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleClick = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres((genres) => {
        const result = genres.filter((_genre) => genre !== _genre);
        return result;
      });

      onClick(cards);
      return;
    }

    setSelectedGenres((genres) => [...genres, genre]);

    const newGenres = [...selectedGenres, genre];
    const sortedCards = cards.filter((card) => {
      return card.genres.some((genre) => newGenres.includes(genre));
    });

    onClick(sortedCards);
  };

  return (
    <PopupButton
      modified={selectedGenres.length <= 0 ? false : true}
      content={<Heading.p data-cancel-close-modal>Filtrar Por</Heading.p>}
      modal={
        <>
          <ButtonRoot
            onClick={() => setOpen((open) => !open)}
            css={{
              background: open ? "$secondaryBase" : "$gray600",
            }}
          >
            <Heading.p font="reading" weight="regular">
              Gênero
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
              {genres.slice(0, Math.floor(genres.length / 2)).map((genre) => (
                <Pill
                  asButton
                  selected={selectedGenres.includes(genre)}
                  key={genre}
                  onClick={() => handleClick(genre)}
                  genre={genre}
                >
                  {genre}
                </Pill>
              ))}
            </Div>

            <Div css={{ display: "flex", gap: "$spacer-1" }}>
              {genres.slice(Math.floor(genres.length / 2)).map((genre) => (
                <Pill
                  asButton
                  selected={selectedGenres.includes(genre)}
                  key={genre}
                  genre={genre}
                  onClick={() => handleClick(genre)}
                >
                  {genre}
                </Pill>
              ))}
            </Div>
          </Div>
        </>
      }
    />
  );
};
