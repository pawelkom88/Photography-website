// fonts
// import "@fontsource/cinzel";
// import "@fontsource/raleway";
// import "@fontsource/montserrat";
// import "@fontsource/cormorant";
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";
// import "@fontsource/josefin-sans";
// import "@fontsource/crimson-pro";

// hooks
import { useState } from "react";
import useMatchMedia from "../hooks/useMatchMedia";

// components
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Main from "../components/main/Main";
import Overlay from "../layout/overlay/Overlay";
import BackgroundImage from "../components/bg-image/BackgroundImage";
import Loader from "../components/loader/Loader";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";
import Hamburger from "../components/hamburger/Hamburger";
import ContactIcon from "../components/contact-icon/ContactIcon";

// styles
import home from "../styles/home/home.module.css";

// helpers
import { AnimatePresence, motion } from "framer-motion";
import { screenSize } from "../helpers/helpers";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);
  const { matches } = useMatchMedia(screenSize);

  const hoverColor = isHovering && !matches ? "white" : "grey";

  function handleMouseOver(id) {
    setIsHovering(true);
    setPosition(id);
  }

  function handleMouseOut() {
    setIsHovering(false);
    setPosition(null);
  }

  const container = {
    show: {
      transition: { staggerChildren: 0.5, delay: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader onLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div variants={container} initial="hidden" animate="show" className={home.scroll}>
          <Header variants={item} className={hoverColor}>
            <Logo variants={item} />
            <div>
              {!matches ? <Button className={hoverColor}>PORTFOLIO</Button> : <Hamburger />}
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
            {!matches && <ContactIcon onHover={isHovering} />}
          </Footer>
          <Overlay>
            {!matches && <BackgroundImage position={position} onHover={isHovering} />}
          </Overlay>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
