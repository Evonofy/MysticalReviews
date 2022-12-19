import { styled } from "@/stitches.config";

import { Title } from "@/components/Title";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/Heading";

export const LogoWrapper = styled("div", {
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBlock: "$spacer-8",
});

export const TextImage = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  textAlign: "center",

  "@tablet": {
    justifyContent: "center",
    alignItems: "center",
  },
});

export function About() {
  return (
    <>
      <Section>
        <Title>Sobre E Contato</Title>
        <LogoWrapper>
          <img src="Logo.svg" alt="" />
        </LogoWrapper>
      </Section>
      <Section>
        <TextImage>
          <Heading.h3 font="reading">
            Por Quê A <Heading.h3 font="display">Mystical</Heading.h3> Foi
            Criada?
          </Heading.h3>
          <img src="Question.svg" alt="" />
        </TextImage>
      </Section>
    </>
  );
}
