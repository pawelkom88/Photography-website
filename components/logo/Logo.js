import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./logo.module.css";

export default function Logo() {
  const variants = {
    start: {
      opacity: 0,
      y: "3vh",
    },
    end: {
      opacity: 1,
      y: "0",
      transition: { duration: 1.5 },
    },
  };

  return (
    <h1 className={styles.logo}>
      <Link href="/main">
        <a>
          <motion.span initial="start" animate="end" variants={variants}>
            KAMILA
          </motion.span>{" "}
          JARCZAK
        </a>
      </Link>
    </h1>
  );
}
