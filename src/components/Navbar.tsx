// Stitches Config
import { styled, globalStyles } from "../stitches.config";

// HTML Tags
import { Tags } from "../components/Tags";

// Icons
import { ImHome3 } from "react-icons/im/index.js";
import { BsSearch, BsFillGearFill } from "react-icons/bs/index.js";
import { FiInfo } from "react-icons/fi/index.js";
import { AiFillStar } from "react-icons/ai/index.js";
import { GiHamburgerMenu } from "react-icons/gi/index.js";

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

  "@tablet": {
    display: "none",
  },
});

const NavTablet = styled("nav", {
  paddingBlock: "$spacer-2",
  paddingInline: "$spacer-10",
  display: "none",

  "@tablet": {
    display: "flex",
  },
  "@desktop": {
    display: "none",
  },
});

export function Navbar() {
  return (
    <>
      <NavMobile>
        <Tags.Link href="#">
          <ImHome3
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></ImHome3>
        </Tags.Link>
        <Tags.Link href="#">
          <BsSearch
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></BsSearch>
        </Tags.Link>

        <Tags.Link href="#">
          <FiInfo
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></FiInfo>
        </Tags.Link>

        <Tags.Link href="#">
          <AiFillStar
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></AiFillStar>
        </Tags.Link>

        <Tags.Link href="#">
          <BsFillGearFill
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></BsFillGearFill>
        </Tags.Link>
      </NavMobile>

      <NavTablet>
        <GiHamburgerMenu
          style={{
            width: "1.563rem",
            height: "1.563rem",
            color: "black",
          }}
        ></GiHamburgerMenu>
      </NavTablet>
    </>
  );
}
