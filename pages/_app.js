// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
import "@fontsource/bodoni-moda";

// hooks
import { useState, useEffect } from "react";
import useFetch from "@hooks/useFetch";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@components/page-transition/PageTransition";

// helpers
import { DefaultSeo } from "next-seo";
import { SEO, additionalLinkTags } from "../seo.config";

// styles
import "styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [numOfPhotos, setNumOfPhotos] = useState(4);
  const [category, setCategory] = useState("people");
  const { openGraph, twitter } = SEO;
  const { data, error } = useFetch(
    `https://api.pexels.com/v1/search?query=${category}&per_page=${numOfPhotos}`
  );

  useEffect(() => {
    if (error) {
      setToggleModal(true);
    }
  }, [error, setToggleModal]);

  useEffect(() => {
    if (router.pathname === "/") return;
    if (router.pathname === "/portfolio") {
      setNumOfPhotos(15);
    } else {
      setNumOfPhotos(4);
    }
  }, [router.pathname]);

  return (
    <>
      <DefaultSeo openGraph={openGraph} twitter={twitter} additionalLinkTags={additionalLinkTags} />
      <AnimatePresence exitBeforeEnter initial={true}>
        <PageTransition transitionKey={router.route}>
          <Component
            {...pageProps}
            error={error}
            data={data}
            setCategory={setCategory}
            setNumOfPhotos={setNumOfPhotos}
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        </PageTransition>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
