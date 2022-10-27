import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./logo.module.css";

export default function Logo({ variants }) {
  return (
    <motion.h1 variants={variants} className={styles.logo}>
      <Link href="/">
        <a>
          <span>KAMILA JARCZAK</span>
        </a>
      </Link>
    </motion.h1>
  );
}
