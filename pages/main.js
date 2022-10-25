// import Head from 'next/head'
// import Image from 'next/image'
import "@fontsource/cinzel";
import "@fontsource/raleway";
import "@fontsource/montserrat";
import "@fontsource/cormorant";
import "@fontsource/questrial"
import "@fontsource/marcellus-sc"

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import { useState } from "react";
import styles from "../styles/home/home.module.css";
import Overlay from "../layout/overlay/Overlay";
import BackgroundImage from "../components/bg-image/BackgroundImage";

const urls = [
  { id: 0, link: "url(/assets/images/wedding.webp)" },
  { id: 1, link: "url(/assets/images/portraits.webp)" },
  { id: 2, link: "url(/assets/images/business.webp)" },
  { id: 3, link: "url(/assets/images/events.webp)" },
  { id: 4, link: "url(/assets/images/properties.webp)" },
  { id: 5, link: "url(/assets/images/themed.webp)" },
];

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState(null);

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
      <Header onHover={isHovering} />
      <Main onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      <Footer onHover={isHovering} />
      <Overlay>
        <BackgroundImage
          setIsHovering={setIsHovering}
          onHover={isHovering}
          url={urls.filter(({ id }) => id === position)}
        />
        ;
      </Overlay>
    </div>
  );
}
