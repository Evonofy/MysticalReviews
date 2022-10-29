import React, { FunctionComponent, ReactNode, useState } from "react";
import { Button } from "../button";

export const PopupButton: FunctionComponent<{
  content?: ReactNode;
  modal?: ReactNode;
}> = ({ content, modal }) => {
  const buttonContent = content!;
  const popupModal = modal!;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen((state) => !state)}>
        {buttonContent}
      </Button>

      {open ? popupModal : null}
    </>
  );
};

export const PopupModal: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};
