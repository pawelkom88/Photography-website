import { useState } from "react";
import Image from "next/image";
import styles from "@styles/section.module.css";
import { motion } from "framer-motion";

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

export default function SectionHero({ videoSrc, imageSrc, section }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className={styles.section}>
      {!isPlaying ? (
        <motion.div key="image" initial="initial" animate="animate" variants={variants}>
          <Image
            layout="fill"
            objectFit="cover"
            src={imageSrc}
            alt="wedding"
            priority
            placeholder="blur"
            blurDataURL={imageSrc}
          />
        </motion.div>
      ) : (
        <>
          <video
            onEnded={() => setIsPlaying(false)}
            className={styles.video}
            muted={true}
            preload="auto"
            autoPlay="autoplay"
            // poster="/assets/images/video-bg.webp"
            type="video/mp4">
            <source src={videoSrc} />
          </video>
        </>
      )}
      <h2 className={styles["section-heading"]}>{section}</h2>
    </section>
  );
}
