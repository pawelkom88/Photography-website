import { useState } from "react";
import MenuMobile from "components/menu-mobile/menuMobile";

import styles from "./hamburger.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`${isOpen ? styles.on : ""} ${styles.dots}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.dot}></span>
      </button>
      <MenuMobile isOpen={isOpen} />
    </>
  );
}
