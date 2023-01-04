import { CardProps } from "./Card";
import { styled } from "@/stitches.config";
import { Pill } from "@/components/Pill";
import { Heading } from "@/components/Heading";
import { slugify } from "@/slugify";
import Link from "next/link";

const Container = styled("a", {
  maxWidth: "280px",
  display: "flex",
  flexDirection: "column",

  img: {
    width: "100%",
    height: "189px",
    borderRadius: "$brSm",
    objectFit: "cover",
    flexShrink: "0",
  },

  "@tablet": {
    maxWidth: "212px",

    img: {
      height: "160px",
    },
  },

  "@desktop": {
    maxWidth: "254px",

    img: {
      height: "200px",
    },
  },
});

const CardContent = styled("section", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-1",
  padding: "$spacer-3 0",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "$spacer-1",
    textAlign: "center",
  },

  "@tablet": {
    padding: "$spacer-2",
    justifyContent: "space-between",

    div: {
      textAlign: "flex-start",
    },
  },
});

export const RecommendationCard = ({
  coverUrl,
  coverImageDescription,
  title,
  createdAt,
  genres,
}: CardProps) => {
  const date = new Date(Number(createdAt));

  const day = date.getDay();
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const year = date.getFullYear();

  return (
    <Container as={Link} href={`${slugify(title)}`}>
      <img src={coverUrl} alt={coverImageDescription} />

      <CardContent>
        <div>
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 8.16675H3.83333V9.83341H5.5V8.16675ZM8.83333 8.16675H7.16667V9.83341H8.83333V8.16675ZM12.1667 8.16675H10.5V9.83341H12.1667V8.16675ZM13.8333 2.33341H13V0.666748H11.3333V2.33341H4.66667V0.666748H3V2.33341H2.16667C1.24167 2.33341 0.508333 3.08341 0.508333 4.00008L0.5 15.6667C0.5 16.1088 0.675595 16.5327 0.988155 16.8453C1.30072 17.1578 1.72464 17.3334 2.16667 17.3334H13.8333C14.75 17.3334 15.5 16.5834 15.5 15.6667V4.00008C15.5 3.08341 14.75 2.33341 13.8333 2.33341ZM13.8333 15.6667H2.16667V6.50008H13.8333V15.6667Z"
              fill="#1B1818"
            />
          </svg>

          <Heading.p>
            {day}.{month}.{year}
          </Heading.p>
        </div>

        <div>
          <Heading.p font="reading">{title}</Heading.p>
        </div>

        <div
          style={{
            width: "100%",
            overflowX: "auto",
            flexWrap: "nowrap",
            justifyContent: "flex-start",
          }}
        >
          {genres.map((genre) => (
            <Pill key={genre.name} {...genre} />
          ))}
        </div>
      </CardContent>
    </Container>
  );
};
