import { FunctionComponent } from "react";
import { styled } from "@/stitches.config";

import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Checkbox } from "@/components/Checkbox";

const ButtonRoot = styled(Button, {
  width: "100%",
  justifyContent: "space-between",
  textTransform: "capitalize",

  padding: "$spacer-2 $spacer-3",
});

export const CheckboxButton: FunctionComponent<{
  label: string;
  checked: boolean;
  onChecked: () => void;
}> = ({ label, checked, onChecked }) => {
  return (
    <ButtonRoot
      onClick={onChecked}
      css={{
        background: checked ? "$secondaryBase" : "$gray600",
      }}
    >
      <Heading.p font="reading" weight="regular">
        {label}
      </Heading.p>

      <Checkbox checked={checked} onChecked={onChecked} />
    </ButtonRoot>
  );
};
