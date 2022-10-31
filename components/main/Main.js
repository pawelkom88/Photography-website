import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./main.module.css";
import { url } from "../../helpers/helpers";

export default function Main({ onMouseOver, onMouseOut, variants, hoverColor }) {
  return (
    <main className={styles.main}>
      <motion.nav variants={variants} className={styles.nav}>
        <span className={`${styles.explore} ${hoverColor}`}>EXPLORE</span>
        <ul className={styles["nav-items"]}>
          {url.map((link, i) => {
            return (
              <li
                key={link}
                onMouseEnter={() => onMouseOver(i)}
                onMouseLeave={onMouseOut}
                className={styles["nav-item"]}>
                <Link href={`/${link.toLowerCase().replace(/ /g, "-")}`}>
                  <a>{link}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </main>
  );
}
