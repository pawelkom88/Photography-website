import Link from "next/link";
import styles from "./main.module.css";

// move to utulities
const url = [
  "Weddings",
  "Portraits",
  "Business photography",
  "Events and Festivals",
  "Properties and interiors",
  "Exhibitions",
];

export default function Main({onMouseHover}) {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <span className={styles.explore}>EXPLORE</span>
        <ul className={styles["nav-items"]}>
          {url.map(link => {
            return (
              <li
                key={link}
                onMouseEnter={() => onMouseHover(true)}
                onMouseLeave={() => onMouseHover(false)}
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
