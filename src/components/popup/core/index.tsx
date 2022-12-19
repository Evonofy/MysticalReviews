import { FunctionComponent, ReactElement, ReactNode } from "react";
import { styled, keyframes } from "@/stitches.config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { CSS } from "@stitches/react";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const DropdownMenuContent = styled(DropdownMenu.Content, {
  minWidth: "282px",
  backgroundColor: "$gray100",
  border: "2px solid $gray200",

  borderRadius: "$brSm",
  padding: "$spacer-5",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",

  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const PopupRoot = styled(DropdownMenu.Root);

export const PopupButton: FunctionComponent<{
  children: ReactNode;
  content: ReactElement;
  css?: CSS;
}> = ({ children, content, css }) => {
  return (
    <PopupRoot css={css}>
      <DropdownMenu.Trigger asChild>{content}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>{children}</DropdownMenuContent>
      </DropdownMenu.Portal>
    </PopupRoot>
  );
};
