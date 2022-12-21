import React from "react";
import type { CardProps } from "@/components/Card";
import { styled } from "@/stitches.config";
import { Heading } from "@/components/Heading";
import { Pill } from "@/components/Pill";
import { Div } from "@/components/utils/Div";
import { RecommendationCard } from "@/components/recommendation-card";
import { cards } from "@/data";

type Props = CardProps;

const PageHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  "@desktop": {},
});

const FloatingTitle = styled(Heading.h1, {
  width: "100%",
  maxWidth: "280px",

  "@tablet": {
    maxWidth: "450px",
  },

  "@desktop": {
    maxWidth: "912px",
  },
});

const ImageContainer = styled("section", {
  position: "relative",
  height: "300px",

  img: {
    position: "absolute",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  "&:after": {
    content: "",
    width: "100%",
    height: "100%",

    position: "absolute",
    top: "0px",
    left: "0px",
    bottom: "0px",
    right: "0px",
    margin: "auto",

    background: "rgba(0, 0, 0, 0.5)",
    zIndex: "$lowest",
  },

  [`${FloatingTitle}`]: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    zIndex: "$highest",
    textAlign: "center",
    color: "$gray100",
  },

  "@tablet": {
    heigth: "350px",
  },

  "@desktop": {
    heigth: "400px",
  },
});

const LimitWidth = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-2",

  "@tablet": {
    gap: "$spacer-3",
  },

  maxWidth: "1100px",
  margin: "0 auto",

  "> div": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "$spacer-1",
  },

  p: {
    textAlign: "center",
  },

  ul: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "$spacer-1",
    overflowX: "auto",

    "@tablet": {
      justifyContent: "center",
    },
  },
});

const HeaderInfo = styled("section", {
  background: "$accentBase",
  color: "$gray100",
  padding: "$spacer-3",

  "@tablet": {
    padding: "$spacer-5",
  },

  "@desktop": {
    padding: "$spacer-6",
  },
});

const PostContent = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-3",
  padding: "$spacer-5 0",

  width: "100%",
  maxWidth: "280px",
  margin: "0 auto",

  "@tablet": {
    maxWidth: "688px",
  },

  "@desktop": {
    maxWidth: "1100px",
  },
});

const RecommendationCardList = styled("ul", {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
});

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const Post: React.FC<Props> = ({
  title,
  coverUrl,
  coverImageDescription,
  createdAt,
  book,
  description,
  genres,
  content,
}) => {
  const formattedDate = (() => {
    const date = new Date(Number(createdAt));

    const day = date.getDay();
    const month = date.toLocaleString("default", {
      month: "long",
    });
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  })();

  return (
    <>
      <PageHeader>
        <ImageContainer>
          <FloatingTitle font={"reading"} weight={"regular"}>
            {title}
          </FloatingTitle>

          <img src={coverUrl} alt={coverImageDescription} />
        </ImageContainer>

        <HeaderInfo>
          <LimitWidth>
            <div>
              <svg
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 1.6745C11.0225 0.403997 8.8805 0.214997 6.9305 0.409997C4.6595 0.639497 2.3675 1.418 0.9395 2.0675C0.808474 2.12709 0.697363 2.22313 0.619432 2.34415C0.5415 2.46517 0.50004 2.60606 0.5 2.75V19.25C0.500035 19.3755 0.531556 19.499 0.591676 19.6091C0.651796 19.7193 0.738593 19.8126 0.844116 19.8805C0.94964 19.9484 1.07052 19.9887 1.19567 19.9978C1.32083 20.0069 1.44627 19.9845 1.5605 19.9325C2.8835 19.3325 5.015 18.611 7.0805 18.4025C9.194 18.1895 10.9655 18.533 11.915 19.718C11.9853 19.8056 12.0743 19.8763 12.1756 19.9249C12.2768 19.9734 12.3877 19.9987 12.5 19.9987C12.6123 19.9987 12.7232 19.9734 12.8244 19.9249C12.9257 19.8763 13.0147 19.8056 13.085 19.718C14.0345 18.533 15.806 18.1895 17.918 18.4025C19.985 18.611 22.118 19.3325 23.4395 19.9325C23.5537 19.9845 23.6792 20.0069 23.8043 19.9978C23.9295 19.9887 24.0504 19.9484 24.1559 19.8805C24.2614 19.8126 24.3482 19.7193 24.4083 19.6091C24.4684 19.499 24.5 19.3755 24.5 19.25V2.75C24.5 2.60606 24.4585 2.46517 24.3806 2.34415C24.3026 2.22313 24.1915 2.12709 24.0605 2.0675C22.6325 1.418 20.3405 0.639497 18.0695 0.409997C16.1195 0.213497 13.9775 0.403997 12.5 1.6745Z"
                  fill="white"
                />
              </svg>

              <Heading.p font="reading" weight="regular">
                {capitalizeFirstLetter(book.author)} -{" "}
                {capitalizeFirstLetter(book.title)}
              </Heading.p>
            </div>

            <Heading.p>{description}</Heading.p>

            <Div
              css={{
                flexDirection: "row !important",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 8.16675H3.83333V9.83341H5.5V8.16675ZM8.83333 8.16675H7.16667V9.83341H8.83333V8.16675ZM12.1667 8.16675H10.5V9.83341H12.1667V8.16675ZM13.8333 2.33341H13V0.666748H11.3333V2.33341H4.66667V0.666748H3V2.33341H2.16667C1.24167 2.33341 0.508333 3.08341 0.508333 4.00008L0.5 15.6667C0.5 16.1088 0.675595 16.5327 0.988155 16.8453C1.30072 17.1578 1.72464 17.3334 2.16667 17.3334H13.8333C14.75 17.3334 15.5 16.5834 15.5 15.6667V4.00008C15.5 3.08341 14.75 2.33341 13.8333 2.33341ZM13.8333 15.6667H2.16667V6.50008H13.8333V15.6667Z"
                  fill="#fff"
                />
              </svg>

              <Heading.p font="reading" weight={"regular"}>
                {formattedDate}
              </Heading.p>
            </Div>

            <ul>
              {genres.map((genre) => (
                <Pill key={genre} genre={genre}>
                  {genre}
                </Pill>
              ))}
            </ul>
          </LimitWidth>
        </HeaderInfo>
      </PageHeader>

      <PostContent>
        {content}

        <Div
          css={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "$spacer-3",
          }}
        >
          <Heading.h3
            css={{ textAlign: "center" }}
            font="display"
            weight="regular"
          >
            Indague-se Em Outros Conteúdos!
          </Heading.h3>

          <RecommendationCardList>
            {cards.slice(0, 4).map((card) => (
              <RecommendationCard
                key={card.title}
                css={{ height: "100%" }}
                {...card}
              />
            ))}
          </RecommendationCardList>
        </Div>
      </PostContent>
    </>
  );
};
