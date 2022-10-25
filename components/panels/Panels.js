import { motion } from "framer-motion";
import styles from "./panels.module.css";

export default function Panels() {
  let hasWindow = typeof window !== "undefined" && window;

  const transition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.9],
  };

  return (
    <>
    
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, hasWindow.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, hasWindow.innerHeight, 0], top: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className={styles["left-panel"]}></motion.div>

      {/* <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, hasWindow.innerHeight, 0], bottom: [0, 0, hasWindow.innerHeight] }}
        exit={{ height: [0, hasWindow.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
        className={styles["right-panel"]}></motion.div> */}

    </>
  );
}
