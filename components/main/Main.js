import Link from "next/link";
import styles from "./main.module.css";

// move to utilities
const url = [
  "Weddings",
  "Portraits",
  "Business photography",
  "Events and Festivals",
  "Properties and interiors",
  "Themed",
];

// chek SEO links linkedin

export default function Main({ onMouseOver, onMouseOut }) {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <span className={styles.explore}>EXPLORE</span>
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
