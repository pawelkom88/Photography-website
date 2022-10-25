import { motion } from "framer-motion";
import styles from "./loader.module.css";

export default function Loader() {
  const word1 = "KAMILAJ".split("");
  const word2 = "PHOTOGRAPHY".split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div
      className={styles.container}>

      <motion.div
        style={{
          marginRight: "1rem",
        }}
        variants={container}
        initial="hidden"
        animate="visible">
        {word1.map((word, index) => (
          <motion.span variants={child} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="visible">
        {word2.map((word, index) => (
          <motion.span variants={child} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
      
    </div>
  );
}
