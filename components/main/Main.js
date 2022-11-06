import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./main.module.css";
import { urls } from "@helpers/helpers";

export default function Main({ onMouseOver, onMouseOut, variants, hoverColor }) {
  return (
    <main className={styles.main}>
      <motion.nav variants={variants} className={styles.nav}>
        <span className={`${styles.explore} ${hoverColor}`}>EXPLORE</span>
        <ul className={styles["nav-items"]}>
          {urls.map(({ linkName }, i) => {
            return (
              <li
                key={linkName}
                onMouseEnter={() => onMouseOver(i)}
                onMouseLeave={onMouseOut}
                className={styles["nav-item"]}>
                <Link href={`/${linkName.toLowerCase().replace(/ /g, "-")}`}>
                  <a>{linkName}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </main>
  );
}
