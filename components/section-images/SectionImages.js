import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./section-image.module.css";

export default function SectionImages({ heading, photosDescription, src, alt }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {}, [selected]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={`${styles["image-1"]} ${styles.image}`}>
          <Image layout="fill" objectFit="cover" src={src} alt={alt} />
        </div>
        <div className={`${styles["image-2"]} ${styles.image}`}>
          <Image layout="fill" objectFit="cover" src={src} alt={alt} />
        </div>
        <div className={`${styles["image-3"]} ${styles.image}`}>
          <Image layout="fill" objectFit="cover" src={src} alt={alt} />
        </div>
        <div className={`${styles["image-4"]} ${styles.image}`}>
          <Image layout="fill" objectFit="cover" src={src} alt={alt} />
        </div>

        <div className={styles.description}>
          <div className={styles.numbers}>
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
          <div className={styles.content}>
            {photosDescription.map(({ id, description }) => {
              // if ((selected)) {
              return <p key={id}>{description}</p>;
              // }
            })}
          </div>
        </div>
      </div>

      <article className={styles.right}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, alias! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eos nisi dicta necessitatibus esse tempora
          labore repudiandae exercitationem temporibus neque sint?
        </p>
      </article>
    </section>
  );
}
