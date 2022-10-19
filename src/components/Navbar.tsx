// Stitches Config
import { styled } from "../stitches.config";

// Icons
import { ImHome3 } from "react-icons/im/index.js";
import { BsSearch } from "react-icons/bs/index.js";
import { FiInfo } from "react-icons/fi/index.js";

const NavRoot = styled("nav", {
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  paddingBlock: "$spacer-3",
  paddingInline: "$spacer-5",
  boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.09)",

  backgroundColor: "$gray100",
});

export function Navbar() {
  return (
    <NavRoot>
      <ImHome3></ImHome3>
      <BsSearch></BsSearch>
      <FiInfo></FiInfo>
      <ImHome3></ImHome3>
      <ImHome3></ImHome3>
    </NavRoot>
  );
}
