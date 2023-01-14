import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FunctionComponent, ReactNode } from "react";
import Head from "next/head";
import { styled } from "@/stitches.config";

const Container = styled("main", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  // Remove if brakes
  alignItems: "center",
  gap: "$spacer-5",

  padding: "$spacer-5",
  marginBottom: "$spacer-12",
  background: "$gray200",

  overflowX: "hidden",

  "@tablet": {
    padding: "$spacer-10",
  },
});

export const Layout: FunctionComponent<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => {
  return (
    <>
      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <title>{title} - MysticalReviews</title>
      </Head> */}

      <Navbar currentPage="" />

      <Container>{children}</Container>

      <Footer />
    </>
  );
};
