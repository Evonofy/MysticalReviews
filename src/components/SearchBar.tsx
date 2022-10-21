// Stitches Config
import { styled } from "../stitches.config";

// Icons
import { BsSearch } from "react-icons/bs/index.js";

const SearchRoot = styled("div", {
  display: "flex",
  position: "relative",
});

const Input = styled("input", {
  width: "245px",

  backgroundColor: "$gray100",
  paddingBlock: "$spacer-1",
  paddingLeft: "$spacer-3",
  paddingRight: "$spacer-10",

  border: "2px solid $accentBase",
  borderRadius: "2.5px",
});

export function SearchBar() {
  return (
    <SearchRoot>
      <Input></Input>
      <BsSearch
        style={{
          width: "1.5rem",
          height: "1.5rem",

          color: "hsl(185, 100%, 35%)",
          position: "absolute",
          left: "85%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></BsSearch>
    </SearchRoot>
  );
}
