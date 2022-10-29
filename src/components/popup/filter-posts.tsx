import { useMemo, useState } from "react";

import { PopupButton } from "./core";
import { CheckboxButton } from "./core/checkbox-button";

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
      content={<div data-cancel-close-modal>Filtrar Por</div>}
      modal={
        <>
          {modifiers.map(({ label, onChecked }) =>
            // prettier-ignore
            <CheckboxButton 
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
      popupId="my-store"
    />
  );
};
