// Stitches Config
import { styled } from "../stitches.config";

// Icons
import { ImHome3 } from "react-icons/im/index.js";
import { BsSearch, BsFillGearFill } from "react-icons/bs/index.js";
import { FiInfo } from "react-icons/fi/index.js";
import { AiFillStar } from "react-icons/ai/index.js";
import { GiHamburgerMenu } from "react-icons/gi/index.js";

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

const NavMobile = styled("nav", {
  width: "100%",
  position: "fixed",
  bottom: "0",
  left: "0",

  display: "flex",
  justifyContent: "space-between",

  paddingInline: "$spacer-5",
  paddingBlock: "$spacer-2",
  backgroundColor: "$gray100",
});

const NavTablet = styled("nav", {
  paddingBlock: "$spacer-2",
  paddingInline: "$spacer-10",
});

export function Navbar() {
  return (
    <NavRoot>
      <NavMobile>
        <ImHome3
          style={{
            width: "1.563rem",
            height: "1.563rem",
          }}
        ></ImHome3>
        <BsSearch></BsSearch>
        <FiInfo></FiInfo>
        <AiFillStar></AiFillStar>
        <BsFillGearFill></BsFillGearFill>
      </NavMobile>
      <NavTablet></NavTablet>
    </NavRoot>
  );
}
