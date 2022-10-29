import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import { styled } from "@/stitches.config";

import { Button } from "@/components/button";
import { useOnClickOutside } from "./use-on-click-outside";

const PopupModal = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-3",

  padding: "$spacer-5",
  background: "$gray100",
  borderTopLeftRadius: "$brSm",
  borderTopRightRadius: "$brSm",

  width: "100%",
  height: "222px",

  position: "absolute",
  margin: "auto",
  $$mobileNavbarHeight: "50px",
  bottom: "$$mobileNavbarHeight",
});

export const PopupButton: FunctionComponent<{
  content?: ReactNode;
  modal?: ReactElement;
  popupId: string;
}> = ({ content, modal, popupId }) => {
  const buttonContent = content!;
  const popupModal = modal!;

  const [open, setOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, (event) => {
    const target = event.target as HTMLElement;
    const targetParent = (event.target as HTMLElement).parentElement
      ?.parentElement;

    if (
      target.hasAttribute("data-cancel-close-modal") ||
      targetParent?.hasAttribute("data-cancel-close-modal")
    ) {
      // do nothing
      return;
    }

    setOpen(false);
  });

  return (
    <>
      <Button
        data-cancel-close-modal
        css={{ background: open ? "$secondaryBase" : "$gray600" }}
        onClick={() => setOpen((state) => !state)}
      >
        {buttonContent}
      </Button>

      {open ? <PopupModal ref={modalRef}>{popupModal}</PopupModal> : null}
    </>
  );
};
