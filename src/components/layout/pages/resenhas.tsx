import { FunctionComponent, useRef, useState } from "react";

import { Title } from "@/components/title";
import { FilterPostsPopup } from "@/components/popup/filter-posts";
import { SortPostsPopup } from "@/components/popup/sort-posts";
import { Div } from "@/components/utils/div";
import { Card, CardProps } from "@/components/card";
import { Section } from "../section";

export const Resenhas: FunctionComponent<{
  cards: CardProps[];
  genres: string[];
}> = ({ cards: cardsData, genres }) => {
  const [cards, setCards] = useState(cardsData);
  console.log("im rendering");

  return (
    <Section>
      <Title>Resenhas</Title>

      <Div
        css={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FilterPostsPopup
          cards={cardsData}
          genres={genres}
          onClick={(sortedCards) => setCards(sortedCards)}
        />

        {/* <SortPostsPopup
          cards={cardsData}
          genres={genres}
          onClick={(sortedCards) => {
            console.log("clicked");
            setCards(sortedCards);
          }}
        /> */}
      </Div>

      {cards.map((props, index) => (
        <Card key={index} {...props} />
      ))}
    </Section>
  );
};
