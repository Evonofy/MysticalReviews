import { useMemo, useState } from "react";

import { Heading } from "../Heading";
import { PopupButton } from "./core";
import { DropdownButton } from "./core/button/DropdownButton";

export const FilterPostsPopup = () => {
  const modifiers = useMemo(
    () => [
      {
        label: "Gênero",
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
