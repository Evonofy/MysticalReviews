import { FunctionComponent, ReactNode } from "react";
import { styled } from "@/stitches.config";

const Container = styled("main", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "$spacer-5",

  padding: "$spacer-5",
  background: "$gray200",

  overflowX: "hidden",

  "@tablet": {
    padding: "$spacer-10",
  },
});

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
