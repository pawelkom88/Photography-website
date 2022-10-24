// import Head from 'next/head'
// import Image from 'next/image'
import "@fontsource/cinzel";
import "@fontsource/raleway";
import "@fontsource/montserrat";
import "@fontsource/cormorant";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";
import {useState} from "react";
// import {motion} from "framer-motion";
import styles from "../styles/home/home.module.css";
import Overlay from "../layout/overlay/Overlay";
import BackgroundImage from "../components/bg-image/backgroundImage";

export default function Home() {
  const [onHover, setOnHover] = useState(false);

  function setBackgroundImage(condition) {
    setOnHover(condition);
  }

  return (
    <div className={styles.scroll}>
      <Header onHover={onHover} />
      <Main onMouseHover={setBackgroundImage} />
      <Footer onHover={onHover} />
      <Overlay>
        <BackgroundImage onHover={onHover} url="url(/assets/images/jenna-no-logo-30.webp)" />
      </Overlay>
    </div>
  );
}
