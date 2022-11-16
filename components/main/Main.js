import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./main.module.css";
import dataJSON from "@helpers/data";

export default function Main({ onMouseOver, onMouseOut, variants, hoverColor }) {
  return (
    <main className={styles.main}>
      <motion.nav variants={variants} className={styles.nav}>
        <span className={`${styles.explore} ${hoverColor}`}>EXPLORE</span>
        <ul className={styles["nav-items"]}>
          {dataJSON.map(({ category }, i) => {
            return (
              <li
                key={category}
                onMouseEnter={() => onMouseOver(i)}
                onMouseLeave={onMouseOut}
                className={styles["nav-item"]}>
                <Link href={`/${category.toLowerCase().replace(/ /g, "-")}`}>
                  <a>{category}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.nav>
    </main>
  );
}
