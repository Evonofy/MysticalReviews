import { FunctionComponent, lazy, Suspense } from "react";

import { styled } from "../stitches.config";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { Div } from "./utils/Div";
const Pill = lazy(() => import("@/components/Pill"));

const CardRoot = styled("div", {
  // mobile
  width: "100%",

  background: "$gray100",
  borderRadius: "$brMd",
  boxShadow: "$default",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "relative",

  "@tablet": {
    // tablet
    // maxWidth: "$tablet",
  },

  "@desktop": {},

  variants: {
    variant: {
      default: {},

      "side-scroll": {
        "@mobile": {
          width: "300px",
        },
      },
    },
  },
});

const ImageContainer = styled("div", {
  width: "100%",
  height: "180px",

  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "@tablet": {
    height: "450px",
  },

  "@desktop": {
    height: "550px",

    position: "relative",

    "&:after": {
      content: "",

      width: "100%",
      height: "100%",

      position: "absolute",
      inset: "0",
      margin: "auto",

      background: "rgba(0, 0, 0, 0.5)",
    },
  },
});

const CardContent = styled("section", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: "$spacer-3",
  padding: "$spacer-3 $spacer-3 $spacer-5",

  "@desktop": {
    flexDirection: "column-reverse",
  },
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
  alignSelf: "center",
  justifyContent: "center",

  gap: "$spacer-1",

  hr: {
    width: "67px",
    height: "5px",

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

  variant?: "default" | "side-scroll";

  createdAt: string;
};

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const Card = ({
  genres,
  title,
  description,
  coverUrl,
  coverImageDescription,
  createdAt,
  variant = "default",
}: CardProps) => {
  const mobileDescription = description.substring(0, 148);
  const sideScrollDescription = description.substring(0, 74);
  const tabletDescription = description.substring(0, 296);
  const desktopDescription = description.substring(0, 344);

  const date = new Date(Number(createdAt));
  const month = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  });

  const formattedDate = `${capitalize(
    month.format(date)
  )} (${date.getMonth()}) ${date.getDate()}, ${date.getFullYear()}`;

  return (
    <CardRoot variant={variant}>
      <ImageContainer>
        <img src={coverUrl} alt={coverImageDescription} />
      </ImageContainer>

      <CardContent>
        <PillList>
          <Suspense fallback={<h1>Loading...</h1>}>
            {genres.map((genre, index) => (
              <Pill key={genre} index={index} href={`/${genre}`}>
                {genre}
              </Pill>
            ))}
          </Suspense>
        </PillList>

        <Div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "$spacer-1",
            alignItems: "flex-start",
          }}
        >
          <Heading.h2
            font="display"
            css={{
              width: "max-content",
              height: "max-content",

              color: "$gray900",

              "@desktop": {
                position: "absolute",
                inset: "0",
                margin: "auto",
                transform: "translateY(-200%)",
                color: "$gray100",
              },
            }}
          >
            {title}
          </Heading.h2>

          {variant === "side-scroll" ? (
            <Heading.p
              font="reading"
              weight="regular"
              css={{
                color: "$gray500",
                fontSize: "$md",
                "@tablet": { display: "none" },
              }}
            >
              {sideScrollDescription}
            </Heading.p>
          ) : (
            <Heading.p
              font="reading"
              weight="regular"
              css={{
                color: "$gray500",
                "@tablet": { display: "none" },
              }}
            >
              {mobileDescription}
            </Heading.p>
          )}

          <Heading.p
            font="reading"
            weight="regular"
            css={{
              color: "$gray500",
              fontSize: "$md",
              display: "none",
              "@tablet": { display: "block" },
              "@desktop": { display: "none" },
            }}
          >
            {tabletDescription}
          </Heading.p>

          <Heading.p
            font="reading"
            weight="regular"
            css={{
              color: "$gray500",
              fontSize: "$lg",
              display: "none",
              "@desktop": { display: "block" },
            }}
          >
            {desktopDescription}
          </Heading.p>
        </Div>

        <DateSection
          css={{
            "@desktop": {
              display: "none",
            },
          }}
        >
          <Heading.p
            font="reading"
            weight="medium"
            css={{
              color: "$gray600",

              "@tablet": {
                fontSize: "$md",
              },
            }}
          >
            {formattedDate}
          </Heading.p>

          <hr />
        </DateSection>

        <Button
          css={{
            display: "none",

            "@tablet": {
              display: "flex",
              alignSelf: "center",
            },

            "@desktop": {
              position: "absolute",
              inset: "0",
              margin: "auto",
              transform: "translateY(-100%)",
              zIndex: "$high",

              width: "max-content",
              height: "max-content",
            },
          }}
        >
          <Heading.p css={{ color: "$gray100" }} weight="medium" font="reading">
            Leia Mais
          </Heading.p>
        </Button>
      </CardContent>
    </CardRoot>
  );
};
