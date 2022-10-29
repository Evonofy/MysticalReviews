import { FunctionComponent, ReactNode } from "react";
import { styled } from "@/stitches.config";

const CheckboxRoot = styled("label", {
  "--checkbox-size": "15px",
  width: "var(--checkbox-size)",
  height: "var(--checkbox-size)",

  display: "block",
  position: "relative",

  userSelect: "none",
  cursor: "pointer",

  input: {
    position: "absolute",

    height: "0",
    width: "0",

    opacity: "0",
    cursor: "pointer",

    "&:checked ~ span": {
      backgroundColor: "#2196F3",

      "&:after": {
        opacity: "1",
      },
    },
  },

  "&:hover input ~ span": {
    backgroundColor: "#ccc",
  },
});

export const Checkmark = styled("span", {
  position: "absolute",
  inset: 0,
  margin: "auto",

  width: "var(--checkbox-size)",
  height: "var(--checkbox-size)",

  background: "transparent",
  border: "1px solid $gray100",
  borderRadius: "$brXm",

  "&:after": {
    content: "",

    position: "absolute",
    inset: 0,
    margin: "auto",

    opacity: "0",

    width: "2px",
    height: "4px",

    border: "solid white",
    borderWidth: "0 3px 3px 0",
    transform: "rotate(45deg)",
  },
});

export const Checkbox: FunctionComponent<{
  checked: boolean;
  onChecked: () => void;
  children?: ReactNode;
}> = ({ checked, children, onChecked }) => {
  return (
    <CheckboxRoot>
      <input type="checkbox" checked={checked} onChange={onChecked} />
      {children}
    </CheckboxRoot>
  );
};
