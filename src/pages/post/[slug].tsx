import { Layout } from "@/components/layout/layout";
import { Home } from "@/components/layout/pages/home";
import { Post } from "@/components/layout/pages/post";
import { slugify } from "@/slugify";
import { buildCardResponse, Card, fetchAllCards, notion } from "@/utils/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { marked } from "marked";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { NotionToMarkdown } from "notion-to-md";

export const getStaticProps: GetStaticProps<
  { card: Card; content: string },
  { slug: string }
> = async (ctx) => {
  const { cards } = await fetchAllCards();

  const slug = ctx.params?.slug;

  const card = cards.find((card) => slugify(card.title) === slug);

  if (!card) {
    return {
      notFound: true,
    };
  }

  const notion2Markdown = new NotionToMarkdown({
    notionClient: notion,
  });

  const pageInMDBlocks = await notion2Markdown.pageToMarkdown(
    card.notionPageID
  );
  const pageContentInMarkdown =
    notion2Markdown.toMarkdownString(pageInMDBlocks);
  const content = marked.parse(pageContentInMarkdown);

  const ONE_MINUTE = 60;

  return {
    props: {
      card,
      content,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: ONE_MINUTE * 15, // In seconds
  };
};

export const getStaticPaths = async () => {
  const { cards } = await fetchAllCards();

  const paths = cards.map(({ title, notionPageID }) => ({
    params: {
      slug: slugify(title),
      pageId: notionPageID,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return {
    paths,
    fallback: "blocking",
  };
};

const Render: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  card,
  content,
}) => {
  return (
    <Layout title="Home">
      <Post {...card} content={content} />
    </Layout>
  );
};

export default Render;
