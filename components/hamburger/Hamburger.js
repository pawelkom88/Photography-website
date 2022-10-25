import styles from "./hamburger.module.css";

export default function Hamburger() {
  const showMenu = false;

  return (
    <div
      //   onClick={handleMenu}
      role="button"
      className={styles.hamburger}
      tabIndex="0"
      aria-expanded="false"
      aria-label="show navigation menu">
      <span className={`${showMenu && styles["open"]} ${styles.line}`}></span>
      <span className={`${showMenu && styles["open"]} ${styles.line}`}></span>
    </div>
  );
}
