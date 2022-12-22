import { styled } from "@/stitches.config";

import { Section } from "@/components/layout/section";

import { Title } from "@/components/Title";
import { Heading } from "@/components/Heading";

import { Newsletter } from "@/components/Newsletter";

import Logo from "@/assets/logo.svg";
import question from "@/assets/question.svg";
import book from "@/assets/book.svg";
import lib from "@/assets/lib.svg";

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
  gap: "$spacer-3",

  "@tablet": {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },

  "@desktop": {
    gap: "$spacer-10",
  },
});

export const AboutImage = styled("img", {
  "@tablet": {
    width: "50%",
  },
});

export function About() {
  return (
    <>
      <Section>
        <Title>Sobre E Contato</Title>

        <LogoWrapper>
          <img src={Logo} alt="" />
        </LogoWrapper>
      </Section>
      <Section
        css={{
          alignItems: "center",
          gap: "$spacer-3",
        }}
      >
        <TextImage>
          <Heading.h3
            css={{
              display: "block",
              "@tablet": {
                display: "none",
              },
            }}
            font="reading"
          >
            Por Quê A <Heading.h3 font="display">Mystical</Heading.h3> Foi
            Criada?
          </Heading.h3>
          <Heading.h1
            css={{
              display: "none",
              "@tablet": {
                display: "block",
              },
            }}
          >
            Por Quê A <Heading.h1 font="display">Mystical</Heading.h1>Foi
            Criada?
          </Heading.h1>
          <AboutImage src={question} alt="" />
        </TextImage>
        <Heading.p
          css={{
            maxWidth: "500px",
          }}
        >
          Percebemos, cada vez mais, que a estrutura atual da organização
          desafia a capacidade de equalização das novas proposições.
        </Heading.p>
      </Section>

      <Section
        css={{
          alignItems: "center",
          gap: "$spacer-3",
        }}
      >
        <TextImage>
          <Heading.h3
            font="display"
            css={{
              display: "block",
              "@tablet": {
                display: "none",
              },
            }}
          >
            Temas Literários{" "}
            <Heading.h3 font="reading">Mais Presentes</Heading.h3>
          </Heading.h3>
          <Heading.h1
            font="reading"
            css={{
              display: "none",
              "@tablet": {
                display: "block",
              },
            }}
          >
            <Heading.h1 font="display">Temas Literários</Heading.h1> Mais
            Presentes
          </Heading.h1>
          <AboutImage src={book} alt="" />
        </TextImage>
        <Heading.p
          css={{
            maxWidth: "500px",
          }}
        >
          Percebemos, cada vez mais, que a estrutura atual da organização
          desafia a capacidade de equalização das novas proposições.
        </Heading.p>
      </Section>

      <Section
        css={{
          alignItems: "center",
          gap: "$spacer-3",
        }}
      >
        <TextImage
          css={{
            "@tablet": {
              flexDirection: "column",
            },
          }}
        >
          <Heading.h3
            css={{
              display: "block",
              "@tablet": {
                display: "none",
              },
            }}
            font="reading"
          >
            Para <Heading.h3 font="display">Quem</Heading.h3>Foi Criado
          </Heading.h3>
          <Heading.h1
            font="reading"
            css={{
              display: "none",
              textAlign: "center",
              "@tablet": {
                display: "flex",
                gap: "$spacer-4",
              },
            }}
          >
            Para <Heading.h1 font="display">Quem</Heading.h1>Foi Criado
          </Heading.h1>
          <AboutImage src={lib} alt="" />
        </TextImage>
        <Heading.p
          css={{
            maxWidth: "500px",
          }}
        >
          Percebemos, cada vez mais, que a estrutura atual da organização
          desafia a capacidade de equalização das novas proposições.
        </Heading.p>
      </Section>
      <Newsletter />
    </>
  );
}
