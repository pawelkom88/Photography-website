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

// helpers
import { AnimatePresence, motion } from "framer-motion";
import { container, item } from "@helpers/animation";
import { parseCookies } from "lib/parseCookies";
import Cookies from "js-cookie";

export default function Home({ initialValue = true, mediaQueries, isOpen, setIsOpen }) {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(() => JSON.parse(initialValue));

  const hoverColor = isHovering && !mediaQueries ? "white" : "grey";

  useEffect(() => {
    Cookies.set("loader", JSON.stringify(loading), { expires: 7 });
  }, [loading]);

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
          <Header variants={item} className={hoverColor}>
            <Logo variants={item} />
            <div>
              {!mediaQueries ? (
                <Link href="/about" className={hoverColor}>
                  <a>
                    <Button className={hoverColor}>ABOUT</Button>
                  </a>
                </Link>
              ) : (
                <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
              )}
            </div>
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
            {!mediaQueries && <ContactIcon onHover={isHovering} />}
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
