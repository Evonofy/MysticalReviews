import { Layout } from "@/components/layout/layout";
import { Destaques } from "@/components/layout/pages/destaques";
import { Card, fetchAllCards } from "@/utils/notion";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

export const getServerSideProps: GetServerSideProps<{ cards: Card[] }> = async (
  context
) => {
  // setting cache
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  try {
    const { cards } = await fetchAllCards();

    return {
      props: {
        cards,
      },
    };
  } catch (error) {
    console.log("failed to fetch the cards");

    return {
      notFound: true,
    };
  }
};

const Render: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cards }) => {
  return (
    <Layout title="Highlights">
      <Destaques cards={cards} />
    </Layout>
  );
};

export default Render;
