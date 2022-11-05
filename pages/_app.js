// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
import "@fontsource/bodoni-moda";

// hooks
import { useState } from "react";
import useMatchMedia from "hooks/useMatchMedia";
import { motion } from "framer-motion";

// helpers
import { screenSize } from "helpers/helpers";
import { pageTransitionVariants } from "helpers/animation";

// styles
import "styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [isOpen, setIsOpen] = useState(false);
  const { matches } = useMatchMedia(screenSize);

  return (
    <>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}>
        <Component mediaQueries={matches} {...pageProps} isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
    </>
  );
}

export default MyApp;
