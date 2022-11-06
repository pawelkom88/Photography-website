// hooks
import { useState, useEffect } from "react";

// components
import Link from "next/link";
import Header from "@layout/header/Header";
import Footer from "@layout/footer/Footer";
import Main from "@components/main/Main";
import Overlay from "@layout/overlay/Overlay";
import BackgroundImage from "@components/bg-image/BackgroundImage";
import Loader from "@components/loader/Loader";
import Button from "@components/button/Button";
import Logo from "@components/logo/Logo";
import Hamburger from "@components/hamburger/Hamburger";
import ContactIcon from "@components/contact-icon/ContactIcon";
import PageSeo from "@components/seo/PageSeo";

// helpers
import { AnimatePresence, motion } from "framer-motion";
import { container, item } from "@helpers/animation";
import { mainPageSeo } from "@helpers/seo";
import { parseCookies } from "lib/parseCookies";
import Cookies from "js-cookie";

export default function Home({ initialValue = true, mediaQueries, isOpen, setIsOpen }) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(() => JSON.parse(initialValue));

  // add white color on hover, only on big screens
  const hoverColor = isHovering && !mediaQueries ? "white" : "grey";

  // Add cookies based on loading value
  useEffect(() => {
    Cookies.set("loader", JSON.stringify(loading), { expires: 7 });
  }, [loading]);

  // render nav button depends pn screen size
  let navBtn;

  if (mediaQueries) {
    navBtn = <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />;
  } else {
    navBtn = (
      <Button className={hoverColor}>
        <Link href="/about" className={hoverColor}>
          <a>ABOUT</a>
        </Link>
      </Button>
    );
  }

  function handleMouseOver(id) {
    setIsHovering(true);
    setPosition(id);
  }

  function handleMouseOut() {
    setIsHovering(false);
    setPosition(null);
  }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader onLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          variants={container}
          initial="hidden"
          animate="show"
          className="container">
          <PageSeo seo={mainPageSeo} />
          <Header variants={item} className={hoverColor}>
            <Logo variants={item} />
            {navBtn}
          </Header>
          <Main
            variants={item}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            hoverColor={hoverColor}
          />
          <Footer variants={item}>
            <p className={hoverColor}>
              Discover the collections of modern, captivating <br />
              and uniquely beautiful photographs.
            </p>
            {!mediaQueries && (
              <ContactIcon styles={{ bottom: "2.8rem", right: 0 }} onHover={isHovering} />
            )}
          </Footer>
          <Overlay>
            {!mediaQueries && <BackgroundImage position={position} onHover={isHovering} />}
          </Overlay>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Home.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialValue: cookies.loader,
  };
};
