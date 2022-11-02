import { FunctionComponent } from "react";
import { styled } from "@/stitches.config";
import { AiFillCheckSquare, AiOutlineBorder } from "react-icons/ai/index.js";

const CheckboxRoot = styled("label", {
  width: "var(--checkbox-size)",
  height: "var(--checkbox-size)",
  "--checkbox-size": "12px",

  "@tablet": {
    "--checkbox-size": "16px",
  },

  "@desktop": {
    "--checkbox-size": "20px",
  },

  display: "block",
  position: "relative",

  userSelect: "none",
  cursor: "pointer",

  svg: {
    width: "100%",
    height: "100%",
  },

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

  "&:hover input ~ svg": {
    display: "none",
    // backgroundColor: "#ccc",
  },
});

export const Checkbox: FunctionComponent<{
  checked: boolean;
  onChecked: () => void;
}> = ({ checked, onChecked }) => {
  return (
    <CheckboxRoot>
      <input type="checkbox" checked={checked} onChange={onChecked} />
      {checked ? <AiFillCheckSquare /> : <AiOutlineBorder />}
    </CheckboxRoot>
  );
};
