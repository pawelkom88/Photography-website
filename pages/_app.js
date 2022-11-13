// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
import "@fontsource/bodoni-moda";

// hooks
import { useState } from "react";
import useMatchMedia from "@hooks/useMatchMedia";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@components/page-transition/PageTransition";

// helpers
import { screenSize } from "helpers/helpers";
import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo.config";

// styles
import "styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [isOpen, setIsOpen] = useState(false);
  const { matches } = useMatchMedia(screenSize);
  const { openGraph, twitter } = SEO;

  return (
    <>
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <PageTransition transitionKey={router.route}>
          <Component mediaQueries={matches} {...pageProps} isOpen={isOpen} setIsOpen={setIsOpen} />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
