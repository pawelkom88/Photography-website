import Link from "next/link";
import { motion } from "framer-motion";
import { sideVariants } from "@helpers/animation";
import classes from "./contact-icon.module.css";

const itemVariants = {
  closed: {
    x: -100,
  },
  open: { x: 0 },
};

export default function ContactIcon({
  onHover = true,
  styles,
  flexDirection = "row",
  fill = "var(--primary-clr)",
}) {

  return (
    <motion.div
      key="contact-icons"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sideVariants}
      style={{ ...styles, flexDirection }}
      className={classes.icons}>
      <Link href="">
        <a>
          <motion.svg
            variants={itemVariants}
            style={{ transition: "0.75s" }}
            fill={onHover ? "var(--secondary-clr)" : fill}
            width="20"
            height="20"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3.342A3.342 3.342 0 0 1 3.342 0h33.313A3.34 3.34 0 0 1 40 3.342v33.313A3.342 3.342 0 0 1 36.656 40H3.342A3.341 3.341 0 0 1 0 36.656V3.342ZM15.833 15.25h5.416v2.72C22.031 16.407 24.031 15 27.036 15c5.762 0 7.128 3.114 7.128 8.83v10.584h-5.831v-9.283c0-3.255-.782-5.091-2.767-5.091-2.755 0-3.9 1.98-3.9 5.09v9.284h-5.833V15.251Zm-10 18.915h5.832V15H5.833v19.166ZM12.5 8.748a3.751 3.751 0 1 1-7.501.165A3.751 3.751 0 0 1 12.5 8.75Z"
            />
          </motion.svg>
        </a>
      </Link>
      <Link href="">
        <a>
          <motion.svg
            variants={itemVariants}
            style={{ transition: "0.75s" }}
            fill={onHover ? "var(--secondary-clr)" : fill}
            width="20"
            height="20"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 20.112C0 30.055 7.222 38.323 16.667 40V25.555h-5V20h5v-4.445c0-5 3.221-7.777 7.778-7.777 1.443 0 3 .222 4.443.444v5.111h-2.555c-2.445 0-3 1.222-3 2.779V20h5.334l-.889 5.555h-4.445V40C32.778 38.323 40 30.057 40 20.112 40 9.05 31 0 20 0S0 9.05 0 20.112Z"
            />
          </motion.svg>
        </a>
      </Link>
      <Link href="">
        <a>
          <motion.svg
            variants={itemVariants}
            style={{ transition: "0.75s" }}
            fill={onHover ? "var(--secondary-clr)" : fill}
            width="29"
            height="29"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M45.313 7.813H4.687a1.56 1.56 0 0 0-1.562 1.562v31.25a1.56 1.56 0 0 0 1.563 1.563h40.624a1.56 1.56 0 0 0 1.563-1.563V9.375a1.56 1.56 0 0 0-1.563-1.563Zm-1.954 5.41v25.449H6.641v-25.45l-1.348-1.05 1.919-2.465 2.09 1.626h31.401l2.09-1.626 1.919 2.466-1.353 1.05Zm-2.656-1.895L25 23.535 9.297 11.328l-2.09-1.626-1.919 2.466 1.348 1.05 16.68 12.968a2.734 2.734 0 0 0 3.354 0l16.69-12.963 1.347-1.05-1.919-2.466-2.085 1.621Z" />
          </motion.svg>
        </a>
      </Link>
    </motion.div>
  );
}
