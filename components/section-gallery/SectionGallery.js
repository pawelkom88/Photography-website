import { Suspense } from "react";
import Image from "next/image";
import Spinner from "@components/spinner/Spinner";
import { ErrorBoundary } from "react-error-boundary";
import styles from "./section-gallery.module.css";

export default function SectionGallery({ data, selected }) {
  return (
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
  );
}
