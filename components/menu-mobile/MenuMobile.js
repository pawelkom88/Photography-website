import { useEffect } from "react";
import ContactIcon from "@components/contact-icon/ContactIcon";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { links, variants, itemVariants, sideVariants } from "@helpers/animation";
import styles from "./menu-mobile.module.css";

export default function MenuMobile({ isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").classList.add("hidden");
    } else {
      document.querySelector("body").classList.remove("hidden");
    }
  }, [isOpen]);

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
                <motion.li
                  whileHover={{ letterSpacing: "5px" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  variants={itemVariants}>
                  <Link href={to}>
                    <a>{name}</a>
                  </Link>
                </motion.li>
              </div>
            ))}
          </motion.ul>
          <ContactIcon
            flexDirection="column"
            styles={{ bottom: "5vh", left: "1vh", minHeight: "12vh" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
