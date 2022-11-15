import { motion } from "framer-motion";
import { wrapper, child, word1, word2 } from "@helpers/animation";
import styles from "./loader.module.css";

export default function Loader({ onLoading }) {
  return (
    <motion.div
      variants={wrapper}
      animate="animate"
      initial="initial"
      exit="exit"
      onAnimationComplete={() => onLoading(false)}
      className={styles.container}>
      <div
        style={{
          marginRight: "1rem",
        }}>
        {word1.map((word, index) => (
          <motion.span variants={child} key={index}>
            {word}
          </motion.span>
        ))}
      </div>
      <div>
        {word2.map((word, index) => (
          <motion.span variants={child} key={index}>
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
