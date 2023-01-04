import { Layout } from "@/components/layout/layout";
import { Resenhas } from "@/components/layout/pages/resenhas";
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
    <Layout title="Reviews">
      <Resenhas cards={cards} />
    </Layout>
  );
};

export default Render;
