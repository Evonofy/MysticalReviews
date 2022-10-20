// Stitches Config
import { styled } from "../stitches.config";

const SearchRoot = styled("div", {
  border: "2px solid $accentBase",
});

export function SearchBar() {
  return <SearchRoot></SearchRoot>;
}
