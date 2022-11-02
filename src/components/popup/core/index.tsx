import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import { customAlphabet } from "nanoid";
import { styled, theme } from "@/stitches.config";

import { Button } from "@/components/Button";
import { useOnClickOutside } from "./UseOnClickOutside";

const PopupContainerRoot = styled("div", {
  "@tablet": {
    position: "relative",
  },
});

const PopupModal = styled("div", {
  display: "none",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$spacer-3",

  padding: "$spacer-5",
  background: "$gray100",
  borderTopLeftRadius: "$brSm",
  borderTopRightRadius: "$brSm",

  width: "100%",
  // height: "222px",

  position: "absolute",
  zIndex: "$highest",
  margin: "auto",

  $$mobileNavbarHeight: "50px",
  bottom: "$$mobileNavbarHeight",

  "@tablet": {
    bottom: "unset",
    transform: "translateY(1rem)",

    borderRadius: "$brSm",
    padding: "$spacer-5",

    width: "282px",
    height: "max-content",
  },
});

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz");

export const PopupButton: FunctionComponent<{
  content?: ReactNode;
  modal?: ReactElement;
}> = ({ content, modal }) => {
  const buttonContent = content!;
  const popupModal = modal!;

  const [modalId] = useState(nanoid(4));
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, (event) => {
    const handleCloseAllModal = () => {
      const currentModal = document.querySelector<HTMLDivElement>(
        `#${modalId}`
      );

      if (!currentModal) return;
      // is it open?
      currentModal.style.display = "none";
      const button = currentModal.previousElementSibling as HTMLButtonElement;
      button.style.backgroundColor = theme.colors.gray600.value;
    };

    // @ts-ignore
    if (event.key) {
      handleCloseAllModal();
      return;
    }

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

    handleCloseAllModal();
  });

  const handleOpenModal = useCallback(() => {
    // close all other modal
    const existingModal = document.querySelectorAll<HTMLDivElement>(".modal");

    existingModal.forEach((modal) => {
      if (modal.id === modalId) {
        return;
      }

      modal.style.display = "none";

      const button = modal.previousElementSibling as HTMLButtonElement;
      button.style.backgroundColor = theme.colors.gray600.value;
    });

    // find current modal
    const currentModal = document.querySelector<HTMLDivElement>(`#${modalId}`);
    if (!currentModal) return;

    const button = currentModal.previousElementSibling as HTMLButtonElement;

    // is it open?
    const isOpen = currentModal.style.display !== "flex" ? false : true;

    if (isOpen) {
      // close
      button.style.backgroundColor = theme.colors.gray600.value;
      currentModal.style.display = "none";
    } else {
      // open
      button.style.backgroundColor = theme.colors.secondaryBase.value;
      currentModal.style.display = "flex";
    }
  }, []);

  return (
    <PopupContainerRoot>
      <Button
        data-cancel-close-modal
        css={{ background: "$gray600" }}
        onClick={handleOpenModal}
      >
        {buttonContent}
      </Button>

      <PopupModal className="modal" id={modalId} ref={modalRef}>
        {popupModal}
      </PopupModal>
    </PopupContainerRoot>
  );
};
