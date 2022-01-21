import React from "react";
import styles from "./styles.module.scss";

type HeaderProps = {
  name: string;
};

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <header className={styles.container}>
      <h1>{name}'s Blog</h1>
    </header>
  );
};
