import { FunctionComponent, ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

export const Pill: FunctionComponent<PillProps> = ({ children }) => (
  <>{children}</>
);

// for lazy purposes
export default Pill;
