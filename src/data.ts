import { Client } from "@notionhq/client";
// import marked from "marked";
// import { NotionToMarkdown } from "notion-to-md";
import { CardProps } from "@/components/Card";

export type Genre = { name: string; backgroundColor: string; color: string };
type Genres = Genre[];

const notion = new Client({
  auth: "secret_5TfAdMRqTNTOv6uFG81I6gBfPntbkzIEdmLQZ0i5YQf",
});

// const n2m = new NotionToMarkdown({
//   notionClient: notion
// })

export const colorTable: Record<
  string,
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

const databasePages = await notion.databases.query({
  database_id: "cd9f0cc2e35e4262bbc920dfdb039edf",
});

// const pageInMDBlocks = await n2m.pageToMarkdown("7deaf0d6-4d04-43c1-9fdf-c0ab2465bde2")
// const pageContentInMarkdown = n2m.toMarkdownString(pageInMDBlocks)
// const pageHTML = marked.parse(pageContentInMarkdown)

export const cards: CardProps[] = databasePages.results.map(
  ({ created_time, cover, properties, id }) => {
    const createdAt = created_time;
    const coverUrl = cover.external.url as string;
    const coverImageDescription = properties.coverImageDescription.rich_text[0]
      .text.content as string;
    const title = properties.title.title[0].text.content as string;
    const description = properties.description.rich_text[0].text
      .content as string;
    const genres: Genres = properties.genres.multi_select.map(
      ({ name, color }) => ({
        name,
        ...colorTable[color],
      })
    );
    const bookTitle = properties.bookTitle.rich_text[0].text.content as string;
    const bookAuthor = properties.bookAuthor.rich_text[0].text
      .content as string;

    return {
      createdAt: new Date(createdAt).getTime().toString(),
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
  }
);
