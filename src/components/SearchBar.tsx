// Stitches Config
import { styled } from "../stitches.config";

// Icons
import { BsSearch } from "react-icons/bs/index.js";

const SearchRoot = styled("div", {
  display: "flex",
  position: "relative",

  svg: {
    color: "hsl(185, 100%, 35%)",
    position: "absolute",
    right: "$spacer-2",
    top: "50%",
    transform: "translateY(-50%)",
  },

  "@tablet": {
    svg: {
      width: "1.125rem",
      height: "1.125rem",
    },
  },

  "@desktop": {
    svg: {
      width: "2rem",
      height: "2rem",
    },
  },
});

const Input = styled("input", {
  width: "208px",
  height: "25px",

  backgroundColor: "$gray100",
  paddingBlock: "$spacer-1",
  paddingLeft: "$spacer-2",
  paddingRight: "$spacer-10",

  border: "2px solid $accentBase",
  borderRadius: "$brXm",
  lineHeight: "$default",

  "@desktop": {
    width: "245px",
    height: "40px",
    paddingBlock: "$spacer-1",
    paddingLeft: "$spacer-3",
  },
});

export function SearchBar() {
  return (
    <SearchRoot>
      <Input />

      <BsSearch />
    </SearchRoot>
  );
}
