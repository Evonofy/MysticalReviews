import { styled } from "@/stitches.config";

import { Div } from "../utils/Div";

export const Section = styled(Div, {
  width: "100%",
  maxWidth: "1100px",

  margin: "auto",

  display: "flex",
  flexDirection: "column",
  gap: "$spacer-5",
});
