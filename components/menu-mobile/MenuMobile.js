import { motion, AnimatePresence } from "framer-motion";
import styles from "./menu-mobile.module.css";

export default function MenuMobile({ isOpen }) {
  // document.querySelector("body").style.overflow = "hidden";

  const easing = [0.6, -0.05, 0.01, 0.99];

  const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 },
  ];

  const variants = {
    initial: { y: "-100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: easing,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    closed: {
      y: "-100%",
    },
    open: { y: 0 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu"
          className={styles["mobile-menu"]}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}>
          <motion.ul
            className={styles["menu-links"]}
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}>
            {links.map(({ name, to, id }) => (
              <div key={id} className={styles["menu-link-wrapper"]}>
                <motion.li href={to} variants={itemVariants}>
                  {name}
                </motion.li>
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
