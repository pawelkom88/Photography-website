// import Head from 'next/head'
// import Image from 'next/image'
import "@fontsource/cinzel";
import "@fontsource/raleway";
import "@fontsource/montserrat";
import "@fontsource/cormorant";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import { useEffect, useState } from "react";
import styles from "../styles/home/home.module.css";
import Overlay from "../layout/overlay/Overlay";
import BackgroundImage from "../components/bg-image/backgroundImage";

const urls = [
  { id: 0, link: "url(/assets/images/jenna-no-logo-30.webp)" },
  { id: 1, link: "url(/assets/images/riverfront-43-social-media.webp)" },
  { id: 2, link: "url(/assets/images/isslington-62-social-media.webp)" },
  { id: 3, link: "url(/assets/images/nr-10-room-social-media-11.webp)" },
  { id: 4, link: "url(/assets/images/portstock-festival-86-social-media.webp)" },

  ,
];

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {}, [id]);

  function handleMouseOver(id) {
    setIsHovering(true);
    setId(id);
  }

  function handleMouseOut() {
    setIsHovering(false);
    setId(null);
  }

  return (
    <div className={styles.scroll}>
      <Header onHover={isHovering} />
      <Main onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      <Footer onHover={isHovering} />
      <Overlay>
        <BackgroundImage onHover={isHovering} url={urls.filter(url => url.id === id)} />;
      </Overlay>
    </div>
  );
}
