import Link from "next/link";
import styles from "./main.module.css";
import { url } from "../../helpers/helpers";

// chek SEO links linkedin

export default function Main({ onMouseOver, onMouseOut, onHover, matches }) {
  const overlayColor = onHover && !matches ? "white" : "grey";

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <span className={`${styles.explore} ${overlayColor}`}>EXPLORE</span>
        <ul className={styles["nav-items"]}>
          {url.map((link, i) => {
            return (
              <li
                key={link}
                onMouseEnter={() => onMouseOver(i)}
                onMouseLeave={onMouseOut}
                className={styles["nav-item"]}>
                <Link href={`/${link.replace(/ /g, "-")}`}>
                  <a>{link}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
