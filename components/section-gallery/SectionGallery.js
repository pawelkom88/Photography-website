import { useState, useEffect, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ImageGalleryDescription from "@components/image-gallery-description/ImageGalleryDescription";
import Image from "next/image";
import Spinner from "@components/spinner/Spinner";
import styles from "./section-gallery.module.css";

export default function SectionGallery({ data, photosDescription }) {
  const [selected, setSelected] = useState(0);

  const [{ description }] = photosDescription.filter(({ id }) => id === selected);

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
    <>
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
      <ImageGalleryDescription description={description} />
    </>
  );
}
