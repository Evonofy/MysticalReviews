import { config, styled } from "../stitches.config";

import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { Div } from "./utils/Div";
const Pill = lazy(() => import("@/components/Pill"));
import { slugify } from "@/slugify";
import { CSS } from "@stitches/react";
import { lazy } from "react";

const CardRoot = styled("a", {
  // mobile
  width: "100%",

  background: "$gray100",
  borderRadius: "$brMd",
  boxShadow: "$default",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  position: "relative",

  "@mobile": {
    "&:active": {
      filter: "brightness(70%)",
    },
  },

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

  borderRadius: "inherit",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",

    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",
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

      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
    },
  },
});

const CardContent = styled("section", {
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",

  gap: "$spacer-3",
  padding: "$spacer-3 $spacer-3 $spacer-5",

  "@desktop": {
    flexDirection: "column-reverse",
    padding: "$spacer-6 $spacer-14",
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

export const CardList = () => {};

export type CardProps = {
  genres: string[];

  title: string;
  coverUrl: string;
  coverImageDescription: string;
  description: string;

  variant?: "default" | "side-scroll";

  createdAt: string;
  css?: CSS<typeof config>;
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
  css,
}: CardProps) => {
  const mobileDescription = description.substring(0, 148);
  const sideScrollDescription = description.substring(0, 60);
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
    <CardRoot href={`/${slugify(title)}`} variant={variant} css={css}>
      <ImageContainer>
        <img src={coverUrl} alt={coverImageDescription} />
      </ImageContainer>

      <CardContent>
        <PillList>
          {genres.map((genre) => (
            <Pill asButton key={slugify(genre)} genre={genre}>
              {genre}
            </Pill>
          ))}
        </PillList>

        <Div
          css={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "$spacer-1",
            alignItems: "flex-start",
          }}
        >
          <Heading.h2
            font="display"
            css={{
              width: "100%",
              height: "max-content",

              color: "$gray900",

              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",

              "@desktop": {
                width: "max-content",
                textAlign: "center",
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
                display: "flex",
                color: "$gray500",
                fontSize: "$md",
              }}
            >
              {sideScrollDescription}...
            </Heading.p>
          ) : (
            <>
              <Heading.p
                font="reading"
                weight="regular"
                css={{
                  color: "$gray500",
                  "@tablet": { display: "none" },
                }}
              >
                {mobileDescription}...
              </Heading.p>

              <Heading.p
                font="reading"
                weight="regular"
                css={{
                  color: "$gray500",
                  fontSize: "$md",
                  display: "none",
                  "@tablet": {
                    display: "block",
                  },
                  "@desktop": { display: "none" },
                }}
              >
                {tabletDescription}...
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
                {desktopDescription}...
              </Heading.p>
            </>
          )}
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

            "@desktop": {
              display: "flex",
              alignSelf: "center",

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