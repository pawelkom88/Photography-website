// import Head from 'next/head'
import Image from "next/image";
import "@fontsource/cinzel";
import "@fontsource/raleway";
import "@fontsource/montserrat";
import "@fontsource/cormorant";
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";

import { useState } from "react";
import useMatchMedia from "../hooks/useMatchMedia";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import Overlay from "../layout/overlay/Overlay";
import BackgroundImage from "../components/bg-image/BackgroundImage";
import { screenSize } from "../helpers/helpers";
import styles from "../styles/home/home.module.css";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(null);
  const { matches } = useMatchMedia(screenSize);

  function handleMouseOver(id) {
    setIsHovering(true);
    setPosition(id);
  }

  function handleMouseOut() {
    setIsHovering(false);
    setPosition(null);
  }

  return (
    <div className={styles.scroll}>
      <Header onHover={isHovering} matches={matches} />
      <Main
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        matches={matches}
        onHover={isHovering}
      />
      <Footer onHover={isHovering} matches={matches} />
      <Overlay>{!matches && <BackgroundImage position={position} onHover={isHovering} />}</Overlay>
    </div>
  );
}
