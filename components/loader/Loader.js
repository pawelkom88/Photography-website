import { useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./loader.module.css";

export default function Loader({ onLoading }) {
  const word1 = "KAMILAJ".split("");
  const word2 = "PHOTOGRAPHY".split("");

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={container}
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
