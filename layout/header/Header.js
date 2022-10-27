import { motion } from "framer-motion";
import styles from "./header.module.css";

export default function Header({ children, className, variants }) {
  return (
    <motion.header variants={variants} className={`${className} ${styles.header}`}>
      {children}
    </motion.header>
  );
}
