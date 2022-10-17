import { styled } from "../stitches.config";

export const Button = styled("a", {
  backgroundColor: "$daojpdfajkdsajopdcsadf",
  $$myColor: "hsl(0, 100%, 40%)",
  color: "$$myColor",
  fontWeight: "bold",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  cursor: "pointer",

  "&:hover": {
    filter: "opacity(50%)",
  },
});
