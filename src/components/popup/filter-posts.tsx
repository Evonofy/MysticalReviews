import { useMemo, useState } from "react";

import { Heading } from "../heading";
import { PopupButton } from "./core";
import { DropdownButton } from "./core/button/dropdown-button";

export const FilterPostsPopup = () => {
  const modifiers = useMemo(
    () => [
      {
        label: "data de publicação",
        onChecked: () => {
          console.log("im selected");
        },
      },
      {
        label: "ordem alfabética",
        onChecked: () => {
          console.log("im selected");
        },
      },
      {
        label: "ordem por gênero",
        onChecked: () => {
          console.log("im selected");
        },
      },
    ],
    []
  );
  const [selectedModifier, setSelectedModifier] = useState(modifiers[0].label);

  return (
    <PopupButton
      content={<Heading.p data-cancel-close-modal>Filtrar Por</Heading.p>}
      modal={
        <>
          {modifiers.map(({ label, onChecked }) =>
            // prettier-ignore
            <DropdownButton
              key={label} 
              label={label}
              checked={label == selectedModifier}
              onChecked={() => {
                setSelectedModifier(label)
                onChecked()
              }} 
            />
          )}
        </>
      }
    />
  );
};
