import { Client } from "@notionhq/client";
import { CardProps } from "@/components/Card";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type Genre = {
  name: string;
  color: string;
  backgroundColor: string;
};

type Genres = Genre[];

const database_id = import.meta.env.PUBLIC_DATABASE_ID;

export const notion = new Client({
  auth: import.meta.env.PUBLIC_NOTION_SECRET,
});

type SelectColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export const colorTable: Record<
  SelectColor,
  { color: string; backgroundColor: string }
> = {
  default: {
    color: `hsl(30, 0%, 30%)`,
    backgroundColor: `hsl(30, 0%, 90%)`,
  },
  gray: {
    color: `hsl(40, 5%, 30%)`,
    backgroundColor: `hsl(40, 5%, 90%)`,
  },
  brown: {
    color: `hsl(19, 60%, 30%)`,
    backgroundColor: `hsl(19, 80%, 90%)`,
  },
  orange: {
    color: `hsl(26, 60%, 30%)`,
    backgroundColor: `hsl(26, 80%, 90%)`,
  },
  yellow: {
    color: `hsl(42, 60%, 30%)`,
    backgroundColor: `hsl(42, 80%, 90%)`,
  },
  green: {
    color: `hsl(120, 60%, 30%)`,
    backgroundColor: `hsl(120, 80%, 90%)`,
  },
  blue: {
    color: `hsl(200, 60%, 30%)`,
    backgroundColor: `hsl(200, 80%, 90%)`,
  },
  purple: {
    color: `hsl(280, 60%, 30%)`,
    backgroundColor: `hsl(280, 80%, 90%)`,
  },
  pink: {
    color: `hsl(334, 60%, 30%)`,
    backgroundColor: `hsl(334, 80%, 90%)`,
  },
  red: {
    color: `hsl(360, 60%, 30%)`,
    backgroundColor: `hsl(360, 80%, 90%)`,
  },
};

export const getCards = async () => {
  let items: Array<PageObjectResponse> = [];

  try {
    const database = await notion.databases.query({
      database_id,
    });

    items = database.results as Array<PageObjectResponse>;
  } catch (error) {
    console.log(error);
    console.log("error here");
  }

  const cards = items.map(({ id, created_time, cover, properties }) => {
    const createdAt = new Date(created_time).getTime().toString();

    const coverUrl = (() => {
      if (cover?.type !== "external") {
        throw new Error("Cover should be external");
      }

      return cover.external.url;
    })();

    const coverImageDescription = (() => {
      if (properties["CoverImageDescription"].type !== "rich_text") {
        throw new Error("CoverImageDescription should be rich_text");
      } else if (
        properties["CoverImageDescription"].rich_text[0].type !== "text"
      ) {
        throw new Error("CoverImageDescription rich_text should be type text");
      }

      return properties["CoverImageDescription"].rich_text[0].text.content;
    })();

    const title = (() => {
      if (properties["Title"].type !== "title") {
        throw new Error("Title should be type title");
      } else if (!properties["Title"].title[0]) {
        throw new Error("Title should exist");
      }

      return properties["Title"].title[0].plain_text;
    })();

    const description = (() => {
      if (properties["Description"].type !== "rich_text") {
        throw new Error("Description should be type rich_text");
      } else if (properties["Description"].rich_text[0].type !== "text") {
        throw new Error("Description rich_text should be type text");
      }

      return properties["Description"].rich_text[0].text.content;
    })();

    const genres = (() => {
      if (properties["Genres"].type !== "multi_select") {
        throw new Error("Genres should be type multi_select");
      }

      return properties["Genres"].multi_select.map(({ name, color }) => ({
        name,
        ...colorTable[color],
      }));
    })();

    const bookTitle = (() => {
      if (properties["BookTitle"].type !== "rich_text") {
        throw new Error("BookTitle should be type rich_text");
      } else if (properties["BookTitle"].rich_text[0].type !== "text") {
        throw new Error("BookTitle rich_text should be type text");
      }

      return properties["BookTitle"].rich_text[0].text.content;
    })();

    const bookAuthor = (() => {
      if (properties["BookAuthor"].type !== "rich_text") {
        throw new Error("BookAuthor should be type rich_text");
      } else if (properties["BookAuthor"].rich_text[0].type !== "text") {
        throw new Error("BookAuthor rich_text should be type text");
      }

      return properties["BookAuthor"].rich_text[0].text.content;
    })();

    return {
      createdAt,
      coverUrl,
      coverImageDescription,
      title,
      description,
      genres,
      notionPageID: id,
      book: {
        title: bookTitle,
        author: bookAuthor,
      },
    };
  });

  return cards;
};
