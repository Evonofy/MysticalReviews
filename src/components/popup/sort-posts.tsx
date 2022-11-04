import { styled } from "@/stitches.config";
import { FunctionComponent, useMemo, useState } from "react";
import { Button } from "../button";
import { CardProps } from "../card";
import { Checkbox } from "../checkbox";

import { Heading } from "../heading";
import { PopupButton } from "./core";

const ButtonRoot = styled(Button, {
  width: "100%",
  justifyContent: "space-between",
  textTransform: "capitalize",

  padding: "$spacer-2 $spacer-3",
});

export const SortPostsPopup: FunctionComponent<{
  cards: CardProps[];
  genres: string[];
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
        console.log(cards == sortedCards);
        console.log(cards);
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
      modalAlign="right"
      content={<Heading.p data-cancel-close-modal>Organizar Por</Heading.p>}
      modal={
        <>
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

              <Checkbox
                checked={label === selectedModifier}
                onChecked={() => {}}
              />
            </ButtonRoot>
          ))}
        </>
      }
    />
  );
};
