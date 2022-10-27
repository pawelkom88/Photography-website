import { motion } from "framer-motion";
import styles from "./footer.module.css";

export default function Footer({ children, variants }) {
  return (
    <motion.footer variants={variants} className={styles.footer}>
      {children}
    </motion.footer>
  );
}
