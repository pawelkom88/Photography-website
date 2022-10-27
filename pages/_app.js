import { motion } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: { opacity: 0 },
    transition: { ease: "easeInOut", duration: 3 },
  };

  return (
    <>
      <motion.div key={router.route} initial="initial" animate="animate" variants={variants}>
        <Component {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
