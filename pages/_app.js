// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
import "@fontsource/bodoni-moda";

// hooks
import dynamic from "next/dynamic";
import { useState } from "react";
import useMatchMedia from "@hooks/useMatchMedia";
import { motion, AnimatePresence } from "framer-motion";

// helpers
import { screenSize } from "helpers/helpers";
import { pageTransitionVariants } from "helpers/animation";
import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo.config";

// styles
import "styles/globals.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const [isOpen, setIsOpen] = useState(false);
  const { matches } = useMatchMedia(screenSize);

  const { openGraph, twitter } = SEO;
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <AnimatedCursor
        innerSize={18}
        outerSize={18}
        color={`${isOpen ? "255, 255, 255" : "68, 68, 68"}`}
        outerAlpha={0.2}
        innerScale={1.7}
        outerScale={5}
      />
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants}>
        <Component mediaQueries={matches} {...pageProps} isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
