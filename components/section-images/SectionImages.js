import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import styles from "./section-image.module.css";
import Spinner from "@components/spinner/Spinner";
import { ErrorBoundary } from "react-error-boundary";

export default function SectionImages({ data, heading, photosDescription }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    function isActive() {
      setSelected(prevNum => prevNum + 1);

      if (selected >= data?.photos.length - 1) {
        setSelected(0);
      }
    }

    const timer = setTimeout(isActive, 6000);

    return () => clearTimeout(timer);
  }, [selected, data?.photos?.length]);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <ErrorBoundary fallback={"An error has occured. Try again later"}>
          <Suspense fallback={<Spinner />}>
            {data?.photos?.map(({ id, src, alt }, i) => {
              return (
                <div
                  key={id}
                  className={`${selected === i ? styles.active : styles.filter} ${
                    styles[`image-${i}`]
                  } ${styles.image}`}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={src.large}
                    alt={alt}
                    placeholder="blur"
                    blurDataURL={src.tiny}
                  />
                </div>
              );
            })}
          </Suspense>
        </ErrorBoundary>
        <div className={styles.description}>
          <div className={styles.numbers}>
            {photosDescription.map(({ id }, i) => {
              return (
                <span className={`${selected === i ? styles.active : ""} `} key={id}>{`0${
                  id + 1
                }`}</span>
              );
            })}
          </div>

          <div className={styles.content}>
            {photosDescription.map(({ id, description }) => {
              if (selected === id) {
                return <p key={id}>{description}</p>;
              }
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
