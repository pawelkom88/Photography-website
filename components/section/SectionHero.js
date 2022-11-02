import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/section.module.css";
import { motion } from "framer-motion";

export default function SectionHero({ videoSrc, imageSrc, section }) {
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
    <section className={styles.section}>
      {!isPlaying ? (
        <motion.div key="image" initial="initial" animate="animate" variants={variants}>
          <Image layout="fill" objectFit="cover" src={imageSrc} alt="wedding" />
        </motion.div>
      ) : (
        <>
          <video
            onEnded={() => setIsPlaying(false)}
            className={styles.video}
            muted={true}
            preload="auto"
            autoPlay="autoplay"
            type="video/mp4">
            <source src={videoSrc} />
          </video>
          <p>Scroll down</p>
        </>
      )}
      <h2 className={styles["section-heading"]}>{section}</h2>
    </section>
  );
}
