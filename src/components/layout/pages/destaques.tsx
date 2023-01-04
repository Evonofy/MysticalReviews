import React, { FunctionComponent } from "react";

import { Section } from "@/components/layout/section";
import { Card, CardProps } from "@/components/Card";
import { CardSlider } from "@/components/card-slider";
import { Title } from "@/components/Title";

export const Destaques: FunctionComponent<{ cards: CardProps[] }> = ({
  cards,
}) => {
  const allCategories = [
    // @ts-ignore
    ...new Set(
      cards
        .map(({ genres }) => genres)
        .reduce((acc, curr) => [...new Set(acc.concat(curr))], [])
        .map(({ name }) => name)
    ),
  ];

  return (
    <>
      {allCategories.map((category) => (
        <Section key={category} css={{ "@desktop": { display: "none" } }}>
          <Title>{category}</Title>

          <CardSlider
            cards={cards.filter((card) => {
              return card.genres.map(({ name }) => name).includes(category);
            })}
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
              .filter((card) => {
                return card.genres.map(({ name }) => name).includes(category);
              })
              .map(({ ...props }) => (
                <li key={props.title}>
                  <Card {...props} />
                </li>
              ))}
          </ul>
        </Section>
      ))}
    </>
  );
};
