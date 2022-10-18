import { FunctionComponent, lazy, Suspense } from "react";

import { styled } from "../stitches.config";

import { Heading } from "@/components/heading";
import { Button } from "@/components/button";
const Pill = lazy(() => import("@/components/pill"));

const CardRoot = styled("div", {
  // mobile
  width: "300px",

  background: "$gray100",
  borderRadius: "$brMd",
  boxShadow: "$default",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@tablet": {
    // tablet
  },

  "@desktop": {},

  variants: {
    variant: {
      default: {},

      "side-scroll": {
        width: "300px",
      },
    },
  },
});

const Image = styled("img", {
  width: "100%",
  height: "180px",
  background: "red",

  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",
});

const CardContent = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: "$spacer-3",
  padding: "$spacer-3 $spacer-3 $spacer-5",
});

const PillList = styled("ul", {
  width: "100%",

  display: "flex",
  alignItems: "center",
  gap: "$spacer-3",

  overflowX: "auto",
});

const DateSection = styled("footer", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "$spacer-1",

  hr: {
    borderRadius: "$brXm",
    background: "$accentBase",
  },
});

type CardProps = {
  genres: string[];

  title: string;
  coverUrl: string;
  coverImageDescription: string;
  description: string;

  variant: "default" | "side-scroll";

  createdAt: string;
};

export const Card = ({
  genres,
  title,
  description,
  coverUrl,
  coverImageDescription,
  createdAt,
  variant,
}: CardProps) => {
  const formattedDate = new Intl.DateTimeFormat("pt-BR").format(
    new Date(Number(createdAt))
  );

  return (
    <CardRoot variant={variant}>
      <Image src={coverUrl} alt={coverImageDescription} />

      <CardContent>
        <PillList>
          <Suspense fallback={<h1>Loading...</h1>}>
            {genres.map((genre) => (
              <Pill key={genre}>{genre}</Pill>
            ))}
          </Suspense>
        </PillList>

        <Heading.h2 font="display" css={{ color: "$gray900" }}>
          {title}
        </Heading.h2>

        <Heading.p font="reading" css={{ color: "$gray500" }}>
          {description}
        </Heading.p>

        <DateSection>
          <Heading.p>{formattedDate}</Heading.p>
          <hr />
        </DateSection>

        <Button
          css={{
            display: "none",

            "@tablet": {
              display: "flex",
            },
          }}
        >
          Leia Mais
        </Button>
      </CardContent>
    </CardRoot>
  );
};
