import { styled } from "../stitches.config";

export const Button = styled("button", {
  backgroundColor: "$secondaryBase",
  color: "$gray100",
  fontWeight: "bold",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  cursor: "pointer",

  "&:hover": {
    filter: "opacity(50%)",
  },
});
