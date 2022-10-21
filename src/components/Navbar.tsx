// Stitches Config
import { styled } from "../stitches.config";

// HTML Tags
import { Tags } from "../components/Tags";

// Components
import { SearchBar } from "./SearchBar";

// Icons
import { ImHome3 } from "react-icons/im/index.js";
import { BsSearch, BsFillGearFill } from "react-icons/bs/index.js";
import { FiInfo, FiSettings } from "react-icons/fi/index.js";
import { AiFillStar } from "react-icons/ai/index.js";
import { GiHamburgerMenu } from "react-icons/gi/index.js";

import image from "../../public/mysticalLogo.svg";

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
  display: "none",

  backgroundColor: "$gray100",
  paddingBlock: "$spacer-2",
  paddingInline: "$spacer-10",

  "@tablet": {
    flexCenter: "row",
    justifyContent: "space-between",
  },
  "@desktop": {
    display: "none",
  },
});

const SearchAndSettings = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-5",
});

const NavDesktop = styled("nav", {
  width: "100%",

  display: "none",
  justifyContent: "center",
  alignContent: "center",

  backgroundColor: "$gray100",
  paddingBlock: "$spacer-4",
  paddingInline: "$spacer-8",

  "@desktop": {
    display: "flex",
  },
});

const LimitWidth = styled("div", {
  width: "100%",
  maxWidth: "$desktop",

  display: "flex",
  justifyContent: "space-between",
});

const NavigationContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$spacer-6",
});

const Logo = styled("img", {
  width: "60px",
  height: "60px",
});

const UnorderedList = styled("ul", {
  display: "flex",
  gap: "$spacer-5",

  padding: "0",
  margin: "0",
  listStyle: "none",
});

const ListItem = styled("li", {
  // listStyle: "none",
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
            color: "black",

            width: "1.563rem",
            height: "1.563rem",

            cursor: "pointer",
          }}
        ></GiHamburgerMenu>

        <SearchAndSettings>
          <SearchBar></SearchBar>
          <FiSettings
            style={{
              color: "white",

              width: "2.25rem",
              height: "2.25rem",

              backgroundColor: "hsl(185, 100%, 35%)",
              borderRadius: "2px",
              padding: "0.25rem",

              cursor: "pointer",
            }}
          ></FiSettings>
        </SearchAndSettings>
      </NavTablet>

      <NavDesktop>
        <LimitWidth>
          <NavigationContainer>
            <Logo
              src="
          ./OpenBook.png"
            ></Logo>
            <UnorderedList>
              <ListItem>
                <Tags.Link>RESENHAS</Tags.Link>
              </ListItem>
              <ListItem>
                <Tags.Link>DESTAQUES</Tags.Link>
              </ListItem>
              <ListItem>
                <Tags.Link>SOBRE E CONTATO</Tags.Link>
              </ListItem>
            </UnorderedList>
          </NavigationContainer>

          <SearchAndSettings>
            <SearchBar></SearchBar>
            <FiSettings
              style={{
                color: "white",

                width: "2.25rem",
                height: "2.25rem",

                backgroundColor: "hsl(185, 100%, 35%)",
                borderRadius: "2px",
                padding: "0.25rem",

                cursor: "pointer",
              }}
            ></FiSettings>
          </SearchAndSettings>
        </LimitWidth>
      </NavDesktop>
    </>
  );
}
