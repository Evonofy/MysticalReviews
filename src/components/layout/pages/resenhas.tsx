import { FunctionComponent, useMemo, useState } from "react";

import { Title } from "@/components/Title";
import { FilterPostsPopup } from "@/components/popup/FilterPosts";
import { SortPostsPopup } from "@/components/popup/SortPosts";
import { Div } from "@/components/utils/Div";
import { Card, CardProps } from "@/components/Card";
import { Section } from "../section";
import { Genre } from "@/data";

export const Resenhas: FunctionComponent<{
  cards: CardProps[];
}> = ({ cards: cardsData }) => {
  const [cards, setCards] = useState(cardsData);
  const genres = useMemo(() => {
    const allGenres: Genre[] = [];

    cardsData
      .map((card) => card.genres)
      .reduce((prev, curr) => prev.concat(curr), [])
      .forEach(({ name, ...props }) => {
        if (allGenres.find((genre) => genre.name === name)) {
          return;
        }

        allGenres.push({ name, ...props });
      });

    return allGenres;
  }, [cardsData]);

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

        <SortPostsPopup
          cards={cardsData}
          genres={genres}
          onClick={(sortedCards) => setCards(sortedCards)}
        />
      </Div>

      {cards.map((props, index) => (
        <Card key={index} {...props} />
      ))}
    </Section>
  );
};
