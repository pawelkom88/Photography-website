import MenuMobile from "@components/menu-mobile/MenuMobile";
import styles from "./hamburger.module.css";

export default function Hamburger({ isOpen, setIsOpen }) {
  return (
    <>
      <button
        className={`${isOpen ? styles.active : ""} ${styles.hamburger}`}
        onClick={() => setIsOpen(!isOpen)}></button>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
