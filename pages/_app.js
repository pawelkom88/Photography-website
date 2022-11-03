// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";

import useMatchMedia from "hooks/useMatchMedia";
import { motion } from "framer-motion";
import { screenSize } from "helpers/helpers";
import "styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const { matches } = useMatchMedia(screenSize);

  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1 },
    },
    exit: { opacity: 0 },
    transition: { ease: "easeInOut", duration: 1 },
  };

  return (
    <>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}>
        <Component mediaQueries={matches} {...pageProps} />
      </motion.div>
    </>
  );
}

export default MyApp;
