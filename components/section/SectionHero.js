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

export default function SectionHero({ videoSrc, imageSrc, section, poster }) {
  const router = useRouter();
  const pathName = router.pathname;

  // Use local storage control video, start it only when user first visit the route
  let initialState;

  // retrieve a key from local storage
  if (typeof window !== "undefined" && localStorage.getItem(pathName)) {
    const path = localStorage.getItem(pathName);
    // check if local storage has a key that matches route path and set initial state to false
    if (path === router.pathname) initialState = false;
  } else {
    // otherwise set it to true
    initialState = true;
  }

  const [isPlaying, setIsPlaying] = useState(initialState);

  useEffect(() => {
    // Add an object to a local storage based on route path
    localStorage.setItem(pathName, JSON.stringify(pathName));
  }, [pathName, isPlaying]);

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
            poster={poster}
            type="video/mp4">
            <source src={videoSrc} />
          </video>
        </>
      )}
      <h2 className={styles["section-heading"]}>{section}</h2>
    </section>
  );
}
