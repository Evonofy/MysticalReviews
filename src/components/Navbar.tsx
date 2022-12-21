// Stitches Config
import { styled } from "../stitches.config";

// HTML Tags
import { Tags } from "../components/Tags";
import OpenBook from "./OpenBook.png";

// Components
import { SearchBar } from "./SearchBar";
import { PopupButton } from "./popup/core";
import { theme } from "@/stitches.config";
import * as Switch from "@radix-ui/react-switch";

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

const links = [
  {
    name: "Resenhas",
    href: "reviews",
  },
  {
    name: "Destaques",
    href: "highlights",
  },
  {
    name: "Sobre e Contato",
    href: "about",
  },
];

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

        <Tags.Link href="/pages/about">
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
            {links.map(({ name, href }) => (
              <ListItem key={href}>
                <Tags.Link href={`/MysticalReviews/${href}`}>
                  {name.toUpperCase()}
                </Tags.Link>
              </ListItem>
            ))}
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
            <a href="/MysticalReviews/">
              <Logo src={OpenBook} />
            </a>

            <UnorderedList>
              {links.map(({ name, href }) => (
                <ListItem key={href}>
                  <Tags.Link
                    css={currentPage === href ? { color: "$accentBase" } : {}}
                    href={`/MysticalReviews/${href}`}
                  >
                    {name.toUpperCase()}
                  </Tags.Link>
                </ListItem>
              ))}
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

const SwitchRoot = styled(Switch.Root, {
  width: "28px",
  height: "16px",

  backgroundColor: "$gray300",

  borderRadius: "9999px",

  position: "relative",

  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",

  '&[data-state="checked"]': { backgroundColor: "$secondaryBase" },
});

const SwitchThumb = styled(Switch.Thumb, {
  display: "block",

  width: "12px",
  height: "12px",

  backgroundColor: "white",
  borderRadius: "9999px",

  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",

  '&[data-state="checked"]': {
    transform: "translateX(calc(28px - 12px - 2px))",
  },
});

const PopupContainer = styled("ul", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "$spacer-2",

  "li label, a": {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
});

function ConfigPopup() {
  return (
    <PopupContainer>
      <li>
        <label>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.25C7.93359 6.25 6.25 7.93359 6.25 10C6.25 12.0664 7.93359 13.75 10 13.75C12.0664 13.75 13.75 12.0664 13.75 10C13.75 7.93359 12.0664 6.25 10 6.25ZM19.625 9.39453L15.9258 7.54688L17.2344 3.625C17.4102 3.09375 16.9063 2.58984 16.3789 2.76953L12.457 4.07812L10.6055 0.375C10.3555 -0.125 9.64453 -0.125 9.39453 0.375L7.54688 4.07422L3.62109 2.76562C3.08984 2.58984 2.58594 3.09375 2.76563 3.62109L4.07422 7.54297L0.375 9.39453C-0.125 9.64453 -0.125 10.3555 0.375 10.6055L4.07422 12.4531L2.76563 16.3789C2.58984 16.9102 3.09375 17.4141 3.62109 17.2344L7.54297 15.9258L9.39063 19.625C9.64063 20.125 10.3516 20.125 10.6016 19.625L12.4492 15.9258L16.3711 17.2344C16.9023 17.4102 17.4063 16.9062 17.2266 16.3789L15.918 12.457L19.6172 10.6094C20.125 10.3555 20.125 9.64453 19.625 9.39453ZM13.5352 13.5352C11.5859 15.4844 8.41406 15.4844 6.46484 13.5352C4.51563 11.5859 4.51563 8.41406 6.46484 6.46484C8.41406 4.51562 11.5859 4.51562 13.5352 6.46484C15.4844 8.41406 15.4844 11.5859 13.5352 13.5352Z"
              fill="#2A2A2A"
            />
          </svg>
          <Tags.Paragraph>Tema</Tags.Paragraph>
          <SwitchRoot id="airplane-mode">
            <SwitchThumb />
          </SwitchRoot>
        </label>
      </li>

      <li>
        <a href="about">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6667 0.333313H2.33335C1.41669 0.333313 0.67502 1.08331 0.67502 1.99998L0.666687 12C0.666687 12.9166 1.41669 13.6666 2.33335 13.6666H15.6667C16.5834 13.6666 17.3334 12.9166 17.3334 12V1.99998C17.3334 1.08331 16.5834 0.333313 15.6667 0.333313ZM15.6667 3.66665L9.00002 7.83331L2.33335 3.66665V1.99998L9.00002 6.16665L15.6667 1.99998V3.66665Z"
              fill="#2A2A2A"
            />
          </svg>

          <Tags.Paragraph>Newsletter</Tags.Paragraph>
        </a>
      </li>
    </PopupContainer>
  );
}
