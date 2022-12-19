import React, { FunctionComponent } from "react";

import { Section } from "@/components/layout/section";
import { Card, CardProps } from "@/components/Card";
import { CardSlider } from "@/components/card-slider";
import { Title } from "@/components/Title";
import { RecommendationCard } from "@/components/recommendation-card";

export const Destaques: FunctionComponent<{ cards: CardProps[] }> = ({
  cards,
}) => {
  const allCategories = cards
    .map(({ genres }) => genres)
    .reduce((acc, curr) => [...new Set(acc.concat(curr))], []);

  return (
    <>
      <RecommendationCard {...cards[0]} />
      {allCategories.map((category) => (
        <Section key={category} css={{ "@desktop": { display: "none" } }}>
          <Title>{category}</Title>

          <CardSlider
            cards={cards.filter((card) => card.genres.includes(category))}
          />
        </Section>
      ))}

      {allCategories.map((category) => (
        <Section
          key={category}
          css={{ display: "none", "@desktop": { display: "flex" } }}
        >
          <Title>{category}</Title>

          <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {cards
              .filter((card) => card.genres.includes(category))
              .map(({ ...props }) => (
                <li key={props.title}>
                  <Card css={{ img: { height: "450px" } }} {...props} />
                </li>
              ))}
          </ul>
        </Section>
      ))}
    </>
  );
};
