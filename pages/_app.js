// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
import "@fontsource/bodoni-moda";

// hooks
import { useState } from "react";
import useFetch from "@hooks/useFetch";
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
  const [numOfPages, setNumOfPages] = useState(4);
  const [category, setCategory] = useState("people");
  const [isOpen, setIsOpen] = useState(false);
  const { matches } = useMatchMedia(screenSize);
  const { openGraph, twitter } = SEO;
  const { data } = useFetch(
    `https://api.pexels.com/v1/search?query=${category}&per_page=${numOfPages}`
  );

  return (
    <>
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <PageTransition transitionKey={router.route}>
          <Component
            {...pageProps}
            data={data}
            mediaQueries={matches}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setCategory={setCategory}
            setNumOfPages={setNumOfPages}
          />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
