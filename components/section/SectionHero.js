import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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

// Use local storage control video played in hero section. It starts only when user first visit the route
let initialState;

export default function SectionHero({ videoSrc, imageSrc, section, poster }) {
  const [isSSR, setIsSSR] = useState(true);
  const [isPlaying, setIsPlaying] = useState(initialState);
  const router = useRouter();
  const pathName = router.pathname;

  // In order to prevent the first render from being different I use `useEffect` which is only executed in the browser and is executed during hydration.
  useEffect(() => {
    setIsSSR(false);
  }, []);

  // retrieve a key from local storage
  if (typeof window !== "undefined" && localStorage.getItem(pathName)) {
    const path = localStorage.getItem(pathName);
    // check if local storage has a key that matches route path and set initial state to false
    if (path === router.pathname) initialState = false;
  } else {
    // otherwise set it to true
    initialState = true;
  }

  useEffect(() => {
    // Add a key  to a local storage based on route path when isPlaying state changes (when video ends - check below)
    localStorage.setItem(pathName, pathName);
  }, [pathName, isPlaying]);

  return (
    <section className={styles.section}>
      {!isSSR && !isPlaying ? (
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
        <video
          onEnded={() => setIsPlaying(false)}
          className={styles.video}
          muted={true}
          preload="none"
          poster={poster}
          autoPlay="autoplay"
          type="video/mp4">
          <source src={videoSrc} />
        </video>
      )}
      <h2 className={styles["section-heading"]}>{section}</h2>
    </section>
  );
}
