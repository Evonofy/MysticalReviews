import { styled } from "@/stitches.config";
import { FunctionComponent, useState } from "react";
import { Button } from "../Button";
import { CardProps } from "../Card";
import { Checkbox } from "../Checkbox";

import { Heading } from "../Heading";
import { PopupButton } from "./core";
import { BsSortDown } from "react-icons/bs/index.js";
import { Genre } from "@/data";

const ButtonRoot = styled(Button, {
  width: "100%",
  justifyContent: "space-between",
  textTransform: "capitalize",

  padding: "$spacer-2 $spacer-3",
});

export const SortPostsPopup: FunctionComponent<{
  cards: CardProps[];
  genres: Genre[];
  onClick: (sortedCards: CardProps[]) => void;
}> = ({ cards, onClick }) => {
  const [selectedModifier, setSelectedModifier] = useState<string | null>(null);

  const modifiers = [
    {
      label: "data de publicação",
      onChecked: () => {
        const sortedCards = cards.sort((a, b) => {
          return new Date(b.createdAt).getTime() >
            new Date(a.createdAt).getTime()
            ? -1
            : 1;
        });

        onClick(sortedCards);
      },
    },
    {
      label: "ordem alfabética",
      onChecked: () => {
        const sortedCards = cards.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });

        onClick(sortedCards);
      },
    },
  ];

  return (
    <PopupButton
      content={
        <Button css={{ justifyContent: "space-between" }}>
          <Heading.p data-cancel-close-modal>Organizar Por</Heading.p>
          <BsSortDown />
        </Button>
      }
    >
      {modifiers.map(({ label, onChecked }) => (
        <ButtonRoot
          key={label}
          onClick={() => {
            // if already selected
            if (label === selectedModifier) {
              setSelectedModifier(null);
              onClick(cards);
              return;
            }

            setSelectedModifier(label);

            onChecked();
          }}
          css={{
            background:
              label === selectedModifier ? "$secondaryBase" : "$gray600",
          }}
        >
          <Heading.p font="reading" weight="regular">
            {label}
          </Heading.p>

          <Checkbox checked={label === selectedModifier} onChecked={() => {}} />
        </ButtonRoot>
      ))}
    </PopupButton>
  );
};
