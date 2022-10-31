// fonts
import "@fontsource/questrial";
import "@fontsource/marcellus-sc";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../components/logo/Logo";
import Header from "../layout/header/Header";
import Button from "../components/button/Button";
import Hamburger from "../components/hamburger/Hamburger";
import Overlay from "../layout/overlay/Overlay";
import { motion } from "framer-motion";

// styles
import styles from "../styles/section.module.css";

export default function Weddings({ mediaQueries }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="container">
        <Header>
          <Logo></Logo>
          <div>
            {!mediaQueries ? (
              <Link href="/portfolio">
                <a>
                  <Button>PORTFOLIO</Button>
                </a>
              </Link>
            ) : (
              <Hamburger />
            )}
          </div>
        </Header>
      </div>
      {/* extract component */}
      <>
        <section className={styles.section}>
          {!isPlaying ? (
            <Overlay>
              <motion.div key="image" initial="initial" animate="animate" variants={variants}>
                <Image layout="fill" objectFit="cover" src="/assets/images/w1.webp" alt="wedding" />
              </motion.div>
            </Overlay>
          ) : (
            <>
              <video
                onEnded={() => setIsPlaying(false)}
                className={styles.video}
                muted={true}
                preload="auto"
                autoPlay="autoplay"
                type="video/mp4">
                <source src="/assets/videos/wedding_video.mp4" />
              </video>
              <p>Scroll down</p>
            </>
          )}
          <h2 className={styles["section-heading"]}>Weddings</h2>
        </section>
      </>
      <section className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum consequatur
        quibusdam quod molestiae quae deleniti voluptatibus, reiciendis obcaecati quaerat dicta iure
        tenetur at adipisci nostrum delectus, inventore consectetur accusamus nisi deserunt
        consequuntur maiores necessitatibus quas. Excepturi doloremque libero officiis?
      </section>
    </>
  );
}
