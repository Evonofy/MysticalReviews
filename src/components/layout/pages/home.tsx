import React, { FunctionComponent } from "react";

import { Section } from "@/components/layout/section";
import { Card, CardProps } from "@/components/card";
import { CardSlider } from "@/components/card-slider";
import { Newsletter } from "@/components/newsletter";
import { Title } from "@/components/title";

export const Home: FunctionComponent<{ cards: CardProps[] }> = ({ cards }) => {
  return (
    <>
      <Section css={{ "@desktop": { display: "none" } }}>
        <Title>Publicações Mais Recentes</Title>
        <CardSlider cards={cards} />
      </Section>

      <Section css={{ "@desktop": { display: "none" } }}>
        <Title>Newsletter</Title>
        <Newsletter />
      </Section>

      <Section>
        <Title>Todas Publicações</Title>
        {cards.map((props) => (
          <Card css={{ img: { height: "450px" } }} {...props} />
        ))}
      </Section>
    </>
  );
};
