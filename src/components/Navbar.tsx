// Stitches Config
import { styled } from "../stitches.config";

// HTML Tags
import { Tags } from "../components/Tags";

// Components
import { SearchBar } from "./SearchBar";
import { PopupButton } from "./popup/core";
import { theme } from "@/stitches.config";

// Icons
import { ImHome3 } from "react-icons/im/index.js";
import { BsSearch, BsFillGearFill } from "react-icons/bs/index.js";
import { FiInfo, FiSettings } from "react-icons/fi/index.js";
import { AiFillStar } from "react-icons/ai/index.js";
import { GiHamburgerMenu } from "react-icons/gi/index.js";
import { Button } from "./Button";

const NavMobile = styled("nav", {
  width: "100%",
  height: "50px",
  position: "fixed",
  bottom: "0",
  left: "0",
  zIndex: "$highest",

  display: "flex",
  justifyContent: "space-between",

  paddingInline: "$spacer-5",
  paddingBlock: "$spacer-3",
  backgroundColor: "$gray100",

  boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.09)",

  "@tablet": {
    display: "none",
  },

  svg: {
    color: "$gray600 !important",
  },

  a: {
    display: "grid",
    placeItems: "center",
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
  "a:hover": {
    color: "$accentBase",
  },
});

export function Navbar({ currentPage }: { currentPage: string }) {
  return (
    <>
      <NavMobile>
        <Tags.Link href="/">
          <ImHome3
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></ImHome3>
        </Tags.Link>

        <Tags.Link href="/resenhas">
          <BsSearch
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></BsSearch>
        </Tags.Link>

        <Tags.Link href="/sobre">
          <FiInfo
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></FiInfo>
        </Tags.Link>

        <Tags.Link href="/favoritos">
          <AiFillStar
            style={{
              width: "1.563rem",
              height: "1.563rem",
              color: "black",
            }}
          ></AiFillStar>
        </Tags.Link>

        <Tags.Link href="/configuracoes">
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
        <NavigationContainer>
          <UnorderedList>
            <ListItem>
              <Tags.Link href="/resenhas">RESENHAS</Tags.Link>
            </ListItem>

            <ListItem>
              <Tags.Link href="/destaques">DESTAQUES</Tags.Link>
            </ListItem>

            <ListItem>
              <Tags.Link href="/sobre">SOBRE E CONTATO</Tags.Link>
            </ListItem>
          </UnorderedList>
        </NavigationContainer>

        <SearchAndSettings>
          <SearchBar />

          <PopupButton
            content={
              <Button
                css={{
                  width: "25px",
                  height: "25px",
                  padding: "4px !important",
                  background: "$accentBase",
                }}
              >
                <FiSettings
                  style={{
                    width: "1.125rem",
                    height: "1.125rem",
                  }}
                />
              </Button>
            }
          >
            <ConfigPopup />
          </PopupButton>
        </SearchAndSettings>
      </NavTablet>

      <NavDesktop>
        <LimitWidth>
          <NavigationContainer>
            <Logo src="./OpenBook.png" />

            <UnorderedList>
              <ListItem>
                <Tags.Link href="/resenhas">RESENHAS</Tags.Link>
              </ListItem>

              <ListItem>
                <Tags.Link href="/destaques">DESTAQUES</Tags.Link>
              </ListItem>

              <ListItem>
                <Tags.Link href="/sobre">SOBRE E CONTATO</Tags.Link>
              </ListItem>
            </UnorderedList>
          </NavigationContainer>

          <SearchAndSettings>
            <SearchBar />

            <PopupButton
              content={
                <Button
                  css={{
                    width: "40px",
                    height: "40px",
                    padding: "4px !important",
                    background: "$accentBase",
                  }}
                >
                  <FiSettings
                    data-cancel-close-modal
                    style={{
                      color: "white",

                      width: "2rem",
                      height: "2rem",

                      cursor: "pointer",
                    }}
                  />
                </Button>
              }
            >
              <ConfigPopup />
            </PopupButton>
          </SearchAndSettings>
        </LimitWidth>
      </NavDesktop>
    </>
  );
}

function ConfigPopup() {
  return (
    <ul>
      <li>Trocar tema</li>
      <li>Fazer isso</li>
      <li>E aquilo</li>
    </ul>
  );
}
